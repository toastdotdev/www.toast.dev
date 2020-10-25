import { fetchMdxFromDisk } from "@toastdotdev/mdx";
import rehypePrism from "@toastdotdev/mdx/rehype-prism-mdx.js";
import mdx from "@mdx-js/mdx";
import rehypeSlug from "rehype-slug";
import rehypeLink from "rehype-autolink-headings";
import visit from "unist-util-visit";

export const sourceData = async ({ setDataForSlug }) => {
  const files = await fetchMdxFromDisk({ directory: "./docs" });
  // do stuff
  return Promise.all(
    files.map(async ({ filename, file }) => {
      const mdxExports = {};
      const remarkPluckMeta = (_options) => (tree) => {
        ["meta"].forEach((exportName) => {
          let re = new RegExp(`^export const ${exportName} = `);
          visit(tree, "export", (ast) => {
            if (ast.value.startsWith(`export const ${exportName} = `)) {
              const obj = ast.value.replace(re, "").replace(/;$/, "");
              mdxExports[exportName] = json5.parse(obj);
            }
          });
        });
        return tree;
      };

      let compiledMDX;
      try {
        compiledMDX = await mdx(file, {
          remarkPlugins: [remarkPluckMeta],
          rehypePlugins: [
            rehypePrism,
            rehypeSlug,
            [
              rehypeLink,
              {
                properties: {
                  className: "heading-link-anchor",
                },
                content: {
                  type: "element",
                  tagName: "heading-link-icon",
                  properties: { className: ["heading-link-icon"] },
                  children: [],
                },
              },
            ],
          ],
        });
      } catch (e) {
        console.error(
          `mdx content at ${filename} failed to process with error: `,
          e
        );
        throw e;
      }

      // if the user doesn't have a meta export, make it
      // an empty object
      if (!mdxExports.meta) {
        mdxExports.meta = {};
      }

      const data = {
        ...mdxExports,
        package: {
          slug: "bread",
          name: "Bread",
          version: "continuous",
        },
      };
      await setDataForSlug(filename.replace(/.mdx$/, ""), {
        component: {
          mode: "source",
          value: `/** @jsx mdx */
import {mdx} from '@mdx-js/preact';
${compiledMDX}`,
        },
        data,
      });

      return data;
    })
  );
};
