import { proxy } from "valtio";

const state = proxy({
  intro: true,
  clicked: null,
  urls: [1, 2, 3, 4, 1, 2, 3, 2, 3].map((u) => `/${u}.webp`),
  urlsMain: [
    ["project1/project1_1", "project1/project1_2", "project1/project1_3"],
    ["project2/project2_1", "project2/project2_2", "project2/project2_3"],
    ["project3/project3_1", "project3/project3_2", "project3/project3_3"],
    ["project4/project4_1", "project4/project4_2", "project4/project4_3"],
    ["project5/project5_1", "project5/project5_2", "project5/project5_3"],
    ["project6/project6_1", "project6/project6_2", "project6/project6_3"],
  ].map((urls) => urls.map((u) => `/Komprimierte_Bilder/${u}.jpg`)),
});
export default state;