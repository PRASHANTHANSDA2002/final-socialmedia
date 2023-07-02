import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Visit 
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info5.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Nullclass</Typography>
        <Typography color={medium}><a href="https://nullclass.com/">Nullclass.com</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      NullClass brings you an opportunity full of knowledge-packed industry-based real-time projects. Learn from scratch and earn at the same time. 
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
