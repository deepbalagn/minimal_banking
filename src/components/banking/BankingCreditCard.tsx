import { Icon } from "@iconify/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Menu_Component from "../../customizedComponents/MenuComponent";

export function BankingCreditCard() {
  const [showCurrency, setShowCurrency] = useState<boolean>(true);

  function onToggleCurrency() {
    setShowCurrency(!showCurrency);
    console.log(showCurrency);
  }
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${"src/assets/images/background/background-4.jpg"})`,
          p: 3,
          mb: 2,
          borderRadius: 5,
          position: "relative",
          "&::before, &::after": {
            left: 0,
            right: 0,
            mx: "28px",
            zIndex: -2,
            height: 40,
            bottom: -16,
            content: "''",
            opacity: 0.16,
            borderRadius: 1.5,
            bgcolor: "grey.500",
            position: "absolute",
          },
          "&::after": { mx: "16px", bottom: -8, opacity: 0.32 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#ffffffff", opacity: 0.48 }}
          >
            Current Balance
          </Typography>
          <Menu_Component btnColor="white"/>
        </Box>

        <Box sx={{ display: "flex" }} gap={1}>
          <Typography
            variant="h4"
            sx={{
              color: "#ffffffff",
              fontWeight: "700",
              fontFamily: "Public Sans Variable",
              wordSpacing: 2,
            }}
          >
            {showCurrency ? "********" : "$24,812.03"}
          </Typography>
          <IconButton onClick={onToggleCurrency}>
            <Icon
              icon={showCurrency ? "solar:eye-bold" : "solar:eye-closed-bold"}
              color="#ffffff"
              opacity={0.48}
            />
          </IconButton>
        </Box>

        <Box sx={{ my: 3 }} display="flex" flexDirection="row-reverse" gap={2}>
          <Typography color="white" fontWeight={"700"}>
            **** **** **** 4567
          </Typography>
          <Box
            sx={{
              px: 1,
              py: 0.25,
              bgcolor: "white",
              borderRadius: 0.5,
              display: "inline-flex",
            }}
          >
            <Icon width={24} icon="logos:mastercard" />
          </Box>
        </Box>

        <Box display={"flex"} gap={4}>
          <Stack gap={2}>
            <Typography
              sx={{ color: "#ffffff", opacity: 0.48, fontSize: "12px" }}
            >
              Card Holder
            </Typography>
            <Typography
              sx={{ color: "#ffffff", fontSize: "16px", fontWeight: "600" }}
            >
              {" "}
              Deja Brady
            </Typography>
          </Stack>

          <Stack gap={2}>
            <Typography
              sx={{ color: "#ffffff", opacity: 0.48, fontSize: "12px" }}
            >
              Expiration Date
            </Typography>
            <Typography
              sx={{ color: "#ffffff", fontSize: "16px", fontWeight: "600" }}
            >
              {" "}
              11/32
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
