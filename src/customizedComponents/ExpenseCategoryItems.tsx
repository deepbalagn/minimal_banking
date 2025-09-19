import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

type ExpenseCategoryItemProps = {
    title : string,
    iconText : string,
    iconColor : string,
    iconHeight? : number,
    iconWidth? : number,
    titleFontSize? : number
}

export default function ExpenseCategoryItem({title,iconText,iconColor,iconHeight=16,iconWidth=16,titleFontSize=13}:ExpenseCategoryItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Icon
        icon={iconText}
        width={iconWidth}
        height={iconHeight}
        color={iconColor}
      />
      <Typography fontSize={titleFontSize}>{title}</Typography>
    </Box>
  );
}
