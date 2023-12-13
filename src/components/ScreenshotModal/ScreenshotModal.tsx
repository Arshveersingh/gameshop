import { Box, Image, useColorMode } from "@chakra-ui/react";
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
  const { toggleColorMode, colorMode } = useColorMode();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
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
                } else {
                  return;
                }
              }}
            ></IoIosArrowDropleftCircle>
            <IoIosArrowDroprightCircle
              color={index < screenshots.length - 1 ? "beige" : "gray"}
              size={"80"}
              onClick={() => {
                if (index < screenshots.length - 1) {
                  setIndex(index + 1);
                } else {
                }
              }}
            ></IoIosArrowDroprightCircle>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
