import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdCancel } from "react-icons/md";
import styles from "./ScreenshotModal.module.css";

interface Props {
  screenshots: string[] | undefined;
  clickedIndex: number;
  onClose: () => void;
}

export const ScreenshotModal = ({
  screenshots,
  clickedIndex,
  onClose,
}: Props) => {
  const [index, setIndex] = useState(clickedIndex);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    const handleArrowKeys = (event: KeyboardEvent) => {
      if (event.code === "ArrowRight") {
        if (screenshots && index < screenshots.length - 1) {
          setIndex(index + 1);
        }
      }
      if (event.code === "ArrowLeft") {
        if (screenshots && screenshots.length > 1 && index > 0) {
          setIndex(index - 1);
        }
      }
      if (event.code === "Escape") {
        onClose();
      }
      if (event.ctrlKey && event.code == "KeyK") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleArrowKeys);

    return () => {
      document.removeEventListener("keydown", handleArrowKeys);
    };
  }, [index, screenshots]);

  if (screenshots == undefined) return;

  return (
    <Box>
      <Box className={styles.modalOverlay}>
        <Box></Box>
        <Box className={styles.modalBody}>
          <MdCancel
            className={styles.modalCloseBtn}
            onClick={onClose}
            size={"60"}
            color="beige"
          ></MdCancel>

          <Image
            className={styles.screenshotImage}
            src={screenshots[index] || ""}
          ></Image>

          <Box className={styles.btnGroup}>
            <IoIosArrowDropleftCircle
              color={screenshots.length > 1 && index > 0 ? "beige" : "gray"}
              size={"80"}
              onClick={() => {
                if (screenshots.length > 1 && index > 0) {
                  setIndex(index - 1);
                }
              }}
            ></IoIosArrowDropleftCircle>
            <IoIosArrowDroprightCircle
              color={index < screenshots.length - 1 ? "beige" : "gray"}
              size={"80"}
              onClick={() => {
                if (index < screenshots.length - 1) {
                  setIndex(index + 1);
                }
              }}
            ></IoIosArrowDroprightCircle>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
