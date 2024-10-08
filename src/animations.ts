export const cardAnimation = (isOpen: boolean) => ({
    rotateY: isOpen ? 180 : 0,
    transition: { duration: 0.8, type: "spring", stiffness: 50 }
  })