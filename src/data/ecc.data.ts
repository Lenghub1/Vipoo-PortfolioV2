type ProjectMedia = {
  videoSrc: string;
  imageSrc: string[];
};

const imageMap = {
  "3y8m20d": [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
    "06.webp",
    "07.webp",
    "08.webp",
    "09.webp",
    "10.webp",
  ],
  justice: [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
    "06.webp",
    "07.webp",
  ],
  khmerrouge: [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
    "06.webp",
  ],
};

type Folder = keyof typeof imageMap;

export const projectMedia: Record<Folder, ProjectMedia> = Object.fromEntries(
  Object.entries(imageMap).map(([folder, files]) => [
    folder,
    {
      videoSrc: `/projects/${folder}/animation.mp4`,
      imageSrc: files.map((file) => `/projects/${folder}/${file}`),
    },
  ])
) as Record<Folder, ProjectMedia>;

export const data3y8m20d = projectMedia["3y8m20d"];
export const dataJustice = projectMedia["justice"];
export const dataKhmerrough = projectMedia["khmerrouge"];
