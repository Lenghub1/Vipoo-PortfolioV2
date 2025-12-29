type ProjectMedia = {
  videoSrc: string;
  imageSrc: string[];
};

type others = {
  img: string;
  title: string;
};

const imageMap = {
  khmerrouge: [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
    "06.webp",
  ],
  "3y8m20d": [
    "05.webp",
    "06.webp",
    "07.webp",
    "08.webp",
    "09.webp",
    "10.webp",
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
  ],
  justice: [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
    "06.webp",
    "07.webp",
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
  ],
};

export const other: others[] = [
  {
    img: "/projects/eccc/other/1.webp",
    title: "Non-Judical Measures",
  },
  {
    img: "/projects/eccc/other/2.webp",
    title: "Cases",
  },
  {
    img: "/projects/eccc/other/3.webp",
    title: "Administation",
  },
  {
    img: "/projects/eccc/other/4.webp",
    title: "Office of Co-investigating judges",
  },
  {
    img: "/projects/eccc/other/5.webp",
    title: "About/Bibliography",
  },
  {
    img: "/projects/eccc/other/6.webp",
    title: "Resource",
  },
];

type Folder = keyof typeof imageMap;

export const projectMedia: Record<Folder, ProjectMedia> = Object.fromEntries(
  Object.entries(imageMap).map(([folder, files]) => [
    folder,
    {
      videoSrc: `/projects/eccc/${folder}/animation.mp4`,
      imageSrc: files.map((file) => `/projects/eccc/${folder}/${file}`),
    },
  ])
) as Record<Folder, ProjectMedia>;

export const data3y8m20d = projectMedia["3y8m20d"];
export const dataJustice = projectMedia["justice"];
export const dataKhmerrough = projectMedia["khmerrouge"];
