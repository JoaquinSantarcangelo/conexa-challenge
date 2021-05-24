export const variantsOne = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
  exit: { opacity: 0, y: 10 },
};

export const variantsTwo = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, delay: 0.15 + custom / 5 },
  }),
  exit: { opacity: 0, y: 10 },
};

export const variantsHeader = {
  hidden: { height: 0 },
  visible: { height: "30vh" },
  exit: { height: 0 },
};
