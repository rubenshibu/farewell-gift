$(document).ready(function () {
  // all images

  let image = [
    {
      imgId: "17kRX24qPHvyuRXU9JXl_E2cmlm7TFGe0",
      delay: 100,
    },
    {
      imgId: "17s_qfne-qwen-R4LeId4K2kt37ltM-0K",
      delay: 200,
    },
    {
      imgId: "1cxtBN412FSt7hEYFRHCLN1eW4INzqtMV",
      delay: 300,
    },
    {
      imgId: "1ukqVIm_dWZlxArWo6H13kCDLcTwckGir",
      delay: 400,
    },
    {
      imgId: "10usTgVjgHugQ7m9xoWEkt0Us7u8N2YpY",
      delay: 100,
    },
    {
      imgId: "15N6z3rle2F2BdX265a7BAjj2TIVNO_4t",
      delay: 200,
    },
    {
      imgId: "1mIQ2tYdFuEYfDnBCi3MYiGy6nEhU-aZL",
      delay: 300,
    },
    {
      imgId: "1PFIoeKwNl5ZaAzM-OtthGUnQ08RLw-fm",
      delay: 400,
    },
    {
      imgId: "1tf6EUU8iTwDWZuIClm2mkfujBI7f3dAA",
      delay: 100,
    },
    {
      imgId: "1JBfJ9I1husjiv-vUZ8e_emH_nd_o1Nuh",
      delay: 200,
    },
    {
      imgId: "1VatxjzfCHkCUzsdiXq8jOIahFzQVAVL7",
      delay: 300,
    },
    {
      imgId: "1fFPuQiqEHCENNgUSblzuPz7BLv5pDStW",
      delay: 400,
    },
    {
      imgId: "151xXgkP3C52yk4QUFYIaZo_fkyPsIyOw",
      delay: 100,
    },
    {
      imgId: "1s-4uXYvExEdwCW7c-bwsoxGRUPK1WYNR",
      delay: 200,
    },
    {
      imgId: "1m93FUS_KAhqpdjaUz06dGMdZyEcGZbwp",
      delay: 300,
    },
    {
      imgId: "1dWFIhbJDtXlYFT75CfX20cchOrQLvzPI",
      delay: 400,
    },
    {
      imgId: "1lQTxlF9pVEelrscGbGtRM1a5Qlvbok30",
      delay: 100,
    },
    {
      imgId: "1KxyJFtKPKmzI6tkOw6e2XV35SSWJEOj-",
      delay: 200,
    },
    {
      imgId: "1H0kH1wPxqktwLypBhff_6Ntt-pWD1bnc",
      delay: 300,
    },
    {
      imgId: "14hzKguHWQZ4zGJttVO9ureT8ELS0lU0h",
      delay: 400,
    },
    {
      imgId: "14k5fSXSht74bgvGs5gNnMDATCDlBmu2X",
      delay: 100,
    },
    {
      imgId: "14mbVPiALq8YBIiA9MhqYau3PPv0tcp27",
      delay: 200,
    },
    {
      imgId: "14qxyRJBBi04bRgXYjV2jj8NgS_uuY551",
      delay: 300,
    },
    {
      imgId: "14sln3lTHylG31dgCORJkdI_aqNClhP5e",
      delay: 400,
    },
    {
      imgId: "143jhKE4Khb8CWV-_z9Wtt0v9cAXEUwNQ",
      delay: 100,
    },
    {
      imgId: "14BL2Nyppt84Opn5Q3IEIEGhN8G2Uj8eA",
      delay: 200,
    },
    {
      imgId: "14J-mLDbp7QO1zUsU7vnN38fC3B3TwamC",
      delay: 300,
    },
    {
      imgId: "14L55Ad2z_rsRvxP6XWKYE6DqZMKMmSug",
      delay: 400,
    },
    {
      imgId: "14KsF3ESGVXgc6F6l4rnIu9OHjVORk0_W",
      delay: 100,
    },
    {
      imgId: "14OonPWk28lhJVhkP0kTu0RtrgpYdzjSX",
      delay: 200,
    },
    {
      imgId: "14XLLZPhqVps3fonyyNgRKUEgmLYYlLPy",
      delay: 300,
    },
    {
      imgId: "14fFpBt3VxVRbgkgRE0S0z77KRUiDtnNm",
      delay: 400,
    },
    {
      imgId: "17JKzVrDjJrR5_Q6dQq20W9wEwfikYUvG",
      delay: 100,
    },
    {
      imgId: "17G3lmWK274nuu96go-5sQtugRRZFbv2y",
      delay: 200,
    },
    {
      imgId: "16iMG2kkyBGyBy8Ccv7aUlRNE6Y_LlNbE",
      delay: 300,
    },
    {
      imgId: "16W5Mh037R9_h2tTBN5AcNSMlWkMEmJPx",
      delay: 400,
    },
    {
      imgId: "16Vu2c78SWmKQcZweKq984eGeX76Mkm_i",
      delay: 100,
    },
    {
      imgId: "15amHIVmjA8pqzhI8NxtBMg8AW_7KPqQ_",
      delay: 200,
    },
    {
      imgId: "15dBvlG7GULwfxIdHP_Gk51DIIp4qJMfM",
      delay: 300,
    },
    {
      imgId: "15T9dblepnZZvmCTJqNKzBi7ipa--zIDh",
      delay: 400,
    },
    {
      imgId: "15Sw3HCHWg0FzkzZyZtfwV8sACbArUG2p",
      delay: 100,
    },
    {
      imgId: "15NdYBLq8o-gAUniegtJtJtZ7kf28BCzb",
      delay: 200,
    },
    {
      imgId: "15HthIWhgmJb15y3wDlNuP_sNRJgjukmI",
      delay: 300,
    },
    {
      imgId: "155tNuyC7JeXjDjyP-TF6VrRPyou_nCjU",
      delay: 400,
    },
    {
      imgId: "155EvVeCFjmAmY9B9bTnuT0JVL-h7tgG6",
      delay: 100,
    },
    {
      imgId: "154f5jrF5EpKdo-xkbq5y1nLoTsHHASQl",
      delay: 200,
    },
    {
      imgId: "151Q6jIE99_t9Wpmlzx1zUOxWHveW89gG",
      delay: 300,
    },
    {
      imgId: "14tfBygodf2EhXslo1MFAuFr2lf43HK3O",
      delay: 400,
    },
    {
      imgId: "16PNyPPaJA9R3CFKbB0mImj5ZGEztywom",
      delay: 100,
    },
    {
      imgId: "16Pkl5PHFJfNw67o3lH65p1bc0ZIFoJ_d",
      delay: 200,
    },
    {
      imgId: "16IInFYK0TfEskTTbngqm5ALGn2bVCJkN",
      delay: 300,
    },
    {
      imgId: "16Fvjge3PuABdY1Wj7KusljjbTcKT5caN",
      delay: 400,
    },
    {
      imgId: "16HkaRbDX8SCFGMwyBRqiS4PEhs8zLxxq",
      delay: 100,
    },
    {
      imgId: "16D3RVZ8fRK4leLH_kZfGoClxgYDDPMUH",
      delay: 200,
    },
    {
      imgId: "169IjwDRbckxwYvi_vE0Kufyxv6E_1tzO",
      delay: 300,
    },
    {
      imgId: "167Xv97pwjsu7wwEsKX68Qwcx4xRnF6a-",
      delay: 400,
    },
    {
      imgId: "1679V-8XjxTKzlyw7fW2Q-WKinlA8WDdb",
      delay: 100,
    },
    {
      imgId: "165PgdpCrZ_rcbc9aVynWSkNZ9ALyWxce",
      delay: 200,
    },
    {
      imgId: "164bxmE85Du2MsW6C2Ktr5M6sLiDj4zwl",
      delay: 300,
    },
    {
      imgId: "16-fokQjE3hynUf5cZKuecYShVRqCAm87",
      delay: 400,
    },
    {
      imgId: "15w9EgkMTezmYG-itSWwAz9wnBd4QHowX",
      delay: 100,
    },
    {
      imgId: "15vSvg7QlE98YpN6Zzr7yAi39Y9xDuZn7",
      delay: 200,
    },
    {
      imgId: "15nFa4w9IRcZjNfnsTu_TsOodA1FAKzLs",
      delay: 300,
    },
    {
      imgId: "15m4qZi9KKrTuW9GuM_n6wvuQMjQ9b34r",
      delay: 400,
    },
    {
      imgId: "1DH5BZxfSBV99w7q3N4HmFO1MgoR_Yq_R",
      delay: 100,
    },
    {
      imgId: "1DH458PQXJ2zyRh4I4X4BrAKyzcW7CEeX",
      delay: 200,
    },
    {
      imgId: "1DEfKzsV1gDtodPjSiB0lA0TauOVL-gDz",
      delay: 300,
    },
    {
      imgId: "1DNWr0zfqId_yiEOjoiNzMmCpRXiGIRWP",
      delay: 400,
    },
    {
      imgId: "1DMh8nLhvlnTBQhoWjGu21LJdaB58rUwD",
      delay: 100,
    },
    {
      imgId: "1DUFIWGIsL3_GVSbBiWRF6v6n3w3N80vY",
      delay: 200,
    },
    {
      imgId: "1DSvyCFXe-kGVVmcqDfB3gfM92QiGgeYP",
      delay: 300,
    },
    {
      imgId: "1yjFWV8r7CvuLPTAgIXYH1P33Nc0j6VUC",
      delay: 400,
    },
    {
      imgId: "1CJegedZyoVt9dfjW40DgRuCCc1aUYzke",
      delay: 100,
    },
    {
      imgId: "1CIBl__T6dlD3s_61DyIA1jkMpVS3NoI9",
      delay: 200,
    },
    {
      imgId: "1CBOt1INpF6omr_E0FR_1XY7ZJH-Vq_JK",
      delay: 300,
    },
    {
      imgId: "1CBGFjYENLmLMxYtuVIwZGnbn1QrC0uKt",
      delay: 400,
    },
    {
      imgId: "1C-XQTNu-9Gr86leXJLAS7nkUoKy3OqfP",
      delay: 100,
    },
    {
      imgId: "1CQARZNOIhnRKZn_ViYRbV5par1s84TbG",
      delay: 200,
    },
    {
      imgId: "1CQZTkTGv_9EkADens8CUOAxMoZMbGLJP",
      delay: 300,
    },
    {
      imgId: "1CS-GIV43H7TukxD6ZKZTKk-7vC01dSGY",
      delay: 400,
    },
    {
      imgId: "1CbXk6W1LAzBOu1OzfptcnbRT8RIrTTMI",
      delay: 100,
    },
    {
      imgId: "1CdI67-fxRLIaMkjZqYI4I92bkcS1_GKL",
      delay: 200,
    },
    {
      imgId: "1Dlw5OTvvNTZQPcXuMSditAYLljpgjh3m",
      delay: 300,
    },
    {
      imgId: "1DiFjAoLVOqhT3q8CY4VHhuTNGvgo6tiI",
      delay: 400,
    },
    {
      imgId: "1cxNahRuYx2cRKCsTziUwGt7YmZVtwFvo",
      delay: 100,
    },
    {
      imgId: "1nTh_pQpijYIwiu8GBwcggLkGFP0Zulyc",
      delay: 200,
    },
    {
      imgId: "1CiES0f00saihkKu4LqvGz9JdRVgr4dHc",
      delay: 300,
    },
    {
      imgId: "1Ck459614BZk_h7hVnxXiI-OOa4y9iydQ",
      delay: 400,
    },
    {
      imgId: "1Cx5f7RVuhA92_5i5VBcx4JcGyHMFMm7R",
      delay: 100,
    },
    {
      imgId: "1D0Re0IL936hixKREKtdZOCPY5QlY6w0P",
      delay: 200,
    },
    {
      imgId: "1D8wB8TOy1JvppfkJDlu7xDckJ1n77srY",
      delay: 300,
    },
    {
      imgId: "1DY8PZQAlfM7RFLqW0MS_HuqFZcJoia8k",
      delay: 400,
    },
    {
      imgId: "1DWqBbGi_f9YhWZbdvG0_rrLiq6M2P8Pw",
      delay: 100,
    },
    {
      imgId: "1DVVqQ4B6WYhUj4rtmjKpUIyfCEeBv0bw",
      delay: 200,
    },
    {
      imgId: "1sa0wPsIn9YiXY4IuqZIWTH7DLvZIXHVo",
      delay: 300,
    },
    {
      imgId: "1PCdVxUFTINdGcXYOE65_vyXBWcdgyKce",
      delay: 400,
    },
    {
      imgId: "1FCmgRVs-mNT4aNBCp5Ky7YxiQhSZWLG_",
      delay: 100,
    },
    {
      imgId: "1VrfLLtD8CjzwDch-soyCWxWW07Hn6ssZ",
      delay: 200,
    },
    {
      imgId: "1sra43nVILQiJujg3XJ9Eo7yzZ3vmxQR4",
      delay: 300,
    },
    {
      imgId: "1-_0jBgV8b6_MrPamjOCQIfuN7AqsEo_v",
      delay: 400,
    },
    {
      imgId: "1fuvPG7r1r4C2tQNR3kO5MiBvN05L_R8_",
      delay: 100,
    },
    {
      imgId: "1IumFXu6pTfyqTBzQPOUvoPoSazpQaqiO",
      delay: 200,
    },
    {
      imgId: "107-WNsZ6pBCcz8FWKWMnScg0o0k4Qjcu",
      delay: 300,
    },
    {
      imgId: "1086dCeFr5v5LpSQLSaDPf49qWWZdg1i7",
      delay: 400,
    },
    {
      imgId: "1B-n2Hyt6zqNyyes1rarS9ddSD1mUI4_D",
      delay: 100,
    },
    {
      imgId: "1G3CB9anUNKTv1eiA7YGnkD1xa0d-0zTl",
      delay: 200,
    },
    {
      imgId: "1Sod2X3Zlj7lOx6IafhWdyILjg7tTKJLC",
      delay: 300,
    },
    {
      imgId: "1_J23xE1CGp5inuEUYIBNovEdbqu-xBDx",
      delay: 400,
    },
    {
      imgId: "1-P_tYrqODCDyBrUKtTRCrD6l1JKT0FRW",
      delay: 100,
    },
    {
      imgId: "1_E7st64sbGizqa-6bzWBs57Yws3UDJlB",
      delay: 200,
    },
    {
      imgId: "1_Cwtw20KhqfinONt-9oax04I-L-mWdKs",
      delay: 300,
    },
    {
      imgId: "1_Ovl6bboXWkYLlJahpbgZN-f1aSmRGei",
      delay: 400,
    },
    {
      imgId: "1aUu7_Qb9lOI4KP5l1WHdI5kxqKvmHWJF",
      delay: 100,
    },
    {
      imgId: "1_eUuBI0eJ4Bi5k92nZsMTdaSWOaZ2gMT",
      delay: 200,
    },
    {
      imgId: "1_mimsfkXgKWXYiTi0ZICw-R_YfC3-QtJ",
      delay: 300,
    },
    {
      imgId: "1_laoIy4_jmdt19R22DeLqNn_-z3mWQpD",
      delay: 400,
    },
    {
      imgId: "1_ujGHEhYqUVvoRazdgvgKbdBdEF9nwOU",
      delay: 100,
    },
    {
      imgId: "1a3-FNFEwV8wJEwkgjA1Mvm57NvTsLtrO",
      delay: 200,
    },
    {
      imgId: "1aCybb9f9CLfr4pGgTGv4K4IZH45YkkBg",
      delay: 300,
    },
    {
      imgId: "1aH5Mk3cVEIDP19dSH8bEuO0SojjC84di",
      delay: 400,
    },
    {
      imgId: "1aI8wTYJxsO7z0mSoK1i6b1uH2vfHyXRG",
      delay: 100,
    },
    {
      imgId: "1aEfeCe5qmup1dNzNuoV4OzmnYQgvHDTh",
      delay: 200,
    },
    {
      imgId: "1AMZW_O0Riyn5a92XO5LeRNDfJrWIF55Z",
      delay: 300,
    },
    {
      imgId: "1lRrMq-DxAtrjsuscaV5q1lcKrzxkBrFr",
      delay: 400,
    },
    {
      imgId: "1cw7vaTM1BAh3Y1sWibRFWJk8RIdPeip7",
      delay: 100,
    },
    {
      imgId: "1cw7vaTM1BAh3Y1sWibRFWJk8RIdPeip7",
      delay: 200,
    },
    {
      imgId: "1QastaK55UVU4wzDgBwKwtdQYmffzqw-H",
      delay: 300,
    },
    {
      imgId: "1mzziMKaLj5nPgpDooBWxi_0gAHZBTZqQ",
      delay: 400,
    },
    {
      imgId: "1eRfUrY6z67qPNzCgR6rPw93ef_AQJDcW",
      delay: 100,
    },
    {
      imgId: "1lwXfz2xQsovDNFwJmpbtlApi3qr0YPBu",
      delay: 200,
    },
    {
      imgId: "1-U_b4Ad9uiA7z_DvkXGjqrtu-wQZ6_24",
      delay: 300,
    },
    {
      imgId: "10EiAKStYSS1X8F-hSkY3oqoGtk6LD4Hr",
      delay: 400,
    },
    {
      imgId: "1bX86Dpwd03G91GbayABXWJmEP7YBkxq7",
      delay: 100,
    },
    {
      imgId: "1ASo-NK9PaoBs2TOIA5UfY6MRLEHKOUO4",
      delay: 200,
    },
    {
      imgId: "1I7BLIet-WyNY4vAdDamKyTuXlnbrdWng",
      delay: 300,
    },
    {
      imgId: "1WtMfjaFJ2J_hBQ5geF6tPUxRlhjSoWwZ",
      delay: 400,
    },
    {
      imgId: "1M2DWLBDfi94_ww2NW_7WudmE2U17mD5Z",
      delay: 100,
    },
    {
      imgId: "10iw2TYH0hYlKPiL5Wu84SKdRT_efxHxe",
      delay: 200,
    },
    {
      imgId: "1GpIZLtBeAxcsQOk1chus8g6J7_HwJjR4",
      delay: 300,
    },
    {
      imgId: "1-QKx7PhDmcTJxW6rOVHirjm1YbPO8yjE",
      delay: 400,
    },
    {
      imgId: "1-Q9xm8U9fDDDJM7HMT_sDtd5aFDt1Pi4",
      delay: 100,
    },
    {
      imgId: "1-Q9xm8U9fDDDJM7HMT_sDtd5aFDt1Pi4",
      delay: 200,
    },
    {
      imgId: "1ztswBFnquJI2IzBej6RRMsqu2cbe7D8V",
      delay: 300,
    },
    {
      imgId: "1zuUToeviek0OBH_1Hxl4LhIWef85CXRr",
      delay: 400,
    },
    {
      imgId: "17CDeJwl8ImAQs7E6L3QIo1TSe3EYfMhS",
      delay: 100,
    },
    {
      imgId: "1-F_N4BFlRhAKLU2DZ5JWeLgsKI9uuB02",
      delay: 200,
    },
    {
      imgId: "1-GN4G_d-THcf0MzVjDhw6-UGQ8m42Ynu",
      delay: 300,
    },
    {
      imgId: "1-Hhv5Lt5xe9QQtuRQ5WtCiVpdwXBh3Hq",
      delay: 400,
    },
    {
      imgId: "1-I_PgTfULm-VANIVs62R2gzFW8U3Jx1Q",
      delay: 100,
    },
    {
      imgId: "1-Ok1VU5QF1e653U27I-aV199oF8YAhgc",
      delay: 200,
    },
    {
      imgId: "1-LfGNfq20br7aoDwvNQc0YrPWvDgSIGJ",
      delay: 300,
    },
    {
      imgId: "1-LunQwm3r4yQDkXibC99tpb1j0zJNubW",
      delay: 400,
    },
    {
      imgId: "1E47xTwud4xmPTWxJGXiaMzXfcyYhiFn6",
      delay: 100,
    },
    {
      imgId: "1E-qOyzRj2MDyFFtQ0seUHCOmv-6jiNze",
      delay: 200,
    },
    {
      imgId: "1DuuHSR9hphndsEJQ_vZOs164pqAzoZXD",
      delay: 300,
    },
    {
      imgId: "1DuQ-HS6AxSob8Nd8nxPlfpGYhVjm8GhH",
      delay: 400,
    },
    {
      imgId: "1ESlQmz6VBzzYQvBujlTVdefal3GTwC19",
      delay: 100,
    },
    {
      imgId: "1ESlQmz6VBzzYQvBujlTVdefal3GTwC19",
      delay: 200,
    },
    {
      imgId: "1E9GZCtVarsT5xIxyjQUjmMoStXvp6TsC",
      delay: 300,
    },
    {
      imgId: "1DN9EXSuI68JeaYX5-9UVQbsBIAtdIQkE",
      delay: 400,
    },
    {
      imgId: "1Dmo6BTKZU_MWSMtoTnQgubgxVUFtTp0b",
      delay: 100,
    },
    {
      imgId: "1DLZEax1LxvKcVCJIugN59DyH4Lq9Szq7",
      delay: 200,
    },
    {
      imgId: "1DfWM7GgrWwaMXrecZNQWTk_roVGva4F9",
      delay: 300,
    },
    {
      imgId: "1DOA3BBThp7BqSxFdX-j3J57l3ndySoHI",
      delay: 400,
    },
    {
      imgId: "1DbUFpN-VnFm7xI04l_c0RNkQwdMVFC1X",
      delay: 100,
    },
    {
      imgId: "1Dpg4n9V-bmfSkNLybL1AMMEU3u1nliy-",
      delay: 200,
    },
    {
      imgId: "1DTDQVrwtGEubt4yBTwCIgZsLi9WdXQud",
      delay: 300,
    },
    {
      imgId: "1J1BhBcV0D_2pUKJvoFW5QPkSbpYJtvsT",
      delay: 400,
    },
    {
      imgId: "1J52FkZDG7Y-xIuaeTb6J2wt4p9F7Yk2O",
      delay: 100,
    },
    {
      imgId: "1J5nGWUJsSSeSZq5XUwajluGoq-f0bsnq",
      delay: 200,
    },
    {
      imgId: "1J7FwV6vkodXtbCdIrSMFOwVVfccI2YuC",
      delay: 300,
    },
    {
      imgId: "12WYa-W5-akCVFjPHnU8BrtHhk6XB99US",
      delay: 400,
    },
    {
      imgId: "12R62bi9Ds_ykm2FGZ1Q6fAKO1YpHKk8e",
      delay: 100,
    },
    {
      imgId: "12KaTz4d7-qT6E_hrKcX97rHBX-vaNxMK",
      delay: 200,
    },
    {
      imgId: "12Izj7sF56KjoLKOmnUV_Acx5-hxaVgmo",
      delay: 300,
    },
    {
      imgId: "12_U7e5SraykEzIXHfxph98knuWAnnsDQ",
      delay: 400,
    },
    {
      imgId: "12Ba4fnb7wricEHK9Dioei8QJOBok-LZJ",
      delay: 100,
    },
    {
      imgId: "128cwE7ucM6hNYOZ_ZkHD_qFhCmQ2fCwI",
      delay: 200,
    },
    {
      imgId: "126DqloP4VZKpZXTJuAoCSluLgjkIFdEC",
      delay: 300,
    },
    {
      imgId: "125OkvKjOaRgM0_MqgniCPwM9jmlJXptN",
      delay: 400,
    },
    {
      imgId: "1248OYUptmk9AJWNoLxGnJAVLWDR1dwVx",
      delay: 100,
    },
    {
      imgId: "11uc9NNFfgb4sO90yZ0TVzZNwcooW64uB",
      delay: 200,
    },
    {
      imgId: "11lS0wbAD375EGJqdcYf3_P3FouSReeS4",
      delay: 300,
    },
    {
      imgId: "11i8Py0V8pt33VvBIJOn0Rre6EFYZbhvE",
      delay: 400,
    },
    {
      imgId: "12dcz2qbfs6Z_8fZ78CqLQOSdTG79mxPc",
      delay: 100,
    },
    {
      imgId: "1nIeXuhDDWEE3l_QVbRDm20E9sj58nodF",
      delay: 200,
    },
    {
      imgId: "1nPWEeyRbLsPUEno7ZgzBcBJxPWaeAsmN",
      delay: 300,
    },
    {
      imgId: "1nWr32p0x7NWPFFKKwZQ3Xpc5PIP_hUTG",
      delay: 400,
    },
    {
      imgId: "1niiRD9Zmp0pLUt59KIet4CD6OGmPonMC",
      delay: 100,
    },
    {
      imgId: "1nPoX0nuylxchkZIflEp76CZaMzrETMs3",
      delay: 200,
    },
    {
      imgId: "1nT62B3gRmbMB5GQlQ2QKb4BLsTkMJ-x3",
      delay: 300,
    },
    {
      imgId: "1o-QiBkYfx1-IiV40HI29pvRJyTMLWG0y",
      delay: 400,
    },
    {
      imgId: "1oxRYGr8r6VU2Z4jnLTezpg4gKtgZjYmU",
      delay: 100,
    },
    {
      imgId: "1oSiJJTQgA7VrRPjtcAHj7vVUoiA1-DIn",
      delay: 200,
    },
    {
      imgId: "1owY4ErmSAL7cXx5oUqhJMk4uncO1r0Ub",
      delay: 300,
    },
    {
      imgId: "1p-u5ppYf3wSwVU4M8GFfO7azdpNmeEuD",
      delay: 400,
    },
    {
      imgId: "1pCVCIY1u0-S4PswXcS1sD6ubRqsbpVgn",
      delay: 100,
    },
    {
      imgId: "1pC4udyfr5Y7tlezT67RCT7sI5SnBZFIK",
      delay: 200,
    },
    {
      imgId: "1oH0-LX2d1zSo6Va6ZZCNr4J2sg45XrQM",
      delay: 300,
    },
    {
      imgId: "1o4IFNzkRapBBCr1lcd3RpLfOswB85sdt",
      delay: 400,
    },
    {
      imgId: "1o4S0bd4GkyhSd4q3Hx8dxhY-93P1u-jR",
      delay: 100,
    },
    {
      imgId: "1oItLyuWj1cSrYVD22KmlDcX-7l9aMjC3",
      delay: 200,
    },
    {
      imgId: "1oM6AsCGYIoU-E7GlEjyEqE37MueVJ9gb",
      delay: 300,
    },
    {
      imgId: "1pp_DygGNmEojdQh9HnE364UC8FdtpbPp",
      delay: 400,
    },
    {
      imgId: "1pvwTeiA03V8dtB_LoMLff3W6_0Pibo27",
      delay: 100,
    },
    {
      imgId: "1pyfR6fwgD0SEE_uXAkPQFa2Wma_7a21B",
      delay: 200,
    },
    {
      imgId: "1pfZleWdfm_q_TB4zyDWqPTJJFK2Tdu9c",
      delay: 300,
    },
    {
      imgId: "1pkpdwhAXBKBT4r_f-3tzD5W60fPgK--B",
      delay: 400,
    },
    {
      imgId: "1wlfFa0RVoCJQVuhqaJSqdDcxZj6Y5W0z",
      delay: 100,
    },
    {
      imgId: "1wcRlIlmquJjg6PQTefOdiIV_edpM5rxJ",
      delay: 200,
    },
    {
      imgId: "1x0Ej6XlVRvN1CxXwSfO-6t68cxdYEjmo",
      delay: 300,
    },
    {
      imgId: "1wzXSgloLnZ8UOWWuHoyvfPU1N0a8BiYD",
      delay: 400,
    },
    {
      imgId: "1VJ7286kV4sQak7G9gPZzNXz9yu7a_G4a",
      delay: 100,
    },
    {
      imgId: "1tKcqhO9zKJPxeY0Pz8RwYTXrPwJ8PhPG",
      delay: 200,
    },
    {
      imgId: "1ps2lLW_9L8j7pXUuN1tJOAnKbPeV-4m-",
      delay: 300,
    },
    {
      imgId: "1fZvpegS6-Y2AMFbBmFp3U5C93E9sq0IL",
      delay: 400,
    },
    {
      imgId: "1Pa1YIrw7bMin1OsoYtInsMfFHB9PREH8",
      delay: 100,
    },
    {
      imgId: "1pEoPEco7mLvPIQA2A0hGurjjwR8K_Bqg",
      delay: 200,
    },
    {
      imgId: "1TKxzDQ-CdRzyASk5lBcbEwhkHalXS5lF",
      delay: 300,
    },
    {
      imgId: "1GCIUzz5fNWN-lCIJTPNcgfSJPEzJOVWF",
      delay: 400,
    },
    {
      imgId: "12JtvSEuACg4ceA8Bnc9so6LUqqU7dVeQ",
      delay: 100,
    },
    {
      imgId: "1zQjEfqYdXdYX42Qg_mIqiHc4DwPvBD7R",
      delay: 200,
    },
    {
      imgId: "12HdnWvFtN_LPOwUK4n-VF3v1P9XX61WA",
      delay: 300,
    },
    {
      imgId: "1xBYPLDCYDoqcAfxAJ598I1U49MYMzfZ7",
      delay: 400,
    },
    {
      imgId: "1xNYqxw9wueIZECP4R6MfOdxhmEc5I3Wv",
      delay: 100,
    },
    {
      imgId: "1xKmgWuM1he_zMbXvD2lVh1loYOWDMYc_",
      delay: 200,
    },
    {
      imgId: "1xQemRr2NynZ7wyqIqoNcBuvlJ2QFh53w",
      delay: 300,
    },
    {
      imgId: "1xa8gSx7oCVJh_Yb06pVM5HzPwmElgFzC",
      delay: 400,
    },
    {
      imgId: "1xYb3CmEDVAscbYXBjxtfP2YrtQddPR4F",
      delay: 100,
    },
    {
      imgId: "1byUveR02EDr3CsWAnK7y-gFBKdMXykG4",
      delay: 200,
    },
    {
      imgId: "1NXs1RekowBapxI1AORonMu30g2FhQ7HU",
      delay: 300,
    },
    {
      imgId: "1EHNa-c0TLLGrU90bikqRgptUIg38Dsr9",
      delay: 400,
    },
  ];

  // first year

  let firstYear = [
    {
      imgId: "1laD0Wi4tgNafesP-0-fP-jRvPFbSTuWp",
      delay: 100,
    },
    {
      imgId: "1pcHScnbIcmebAK6AqFX7o0D38Y7Tdwl6",
      delay: 200,
    },
    {
      imgId: "1JTI9lb1uH5xdp-a1t55VXa4m5R0xAqDt",
      delay: 300,
    },
    {
      imgId: "1jDJvauCgJwy2ilb596-8xXLO1BsNFWfY",
      delay: 400,
    },
    {
      imgId: "1dAG7SOWiRo894oZAM7ylyAd9XVeUdaen",
      delay: 100,
    },
    {
      imgId: "1u_VdwX8MM767T7ac-PzZ7z3jT6moR9_g",
      delay: 200,
    },
    {
      imgId: "18Ur0eoCKxmmwxpmxVKUXWp8BDIsueVmg",
      delay: 300,
    },
    {
      imgId: "19zFNBlOWAuSLLPefhB-d-NrhljwZld5e",
      delay: 400,
    },
    {
      imgId: "177qvOjMilE2ecULfiB2ydKQhVZvBUTlp",
      delay: 100,
    },
    {
      imgId: "1bDm3LvGeVe59iJPiwUmblAUOFa7zBHEZ",
      delay: 200,
    },
    {
      imgId: "1PHJrTDRQ73kWyKMdYm9DQ56f2ioUj4mM",
      delay: 300,
    },
    {
      imgId: "1kbaZTXJbUcDaFk8Pgysg7CU4G5NVcOb-",
      delay: 400,
    },
    {
      imgId: "1vFFHSSJ0FV9EmPYt_N6X4DzFOJwjhb4X",
      delay: 100,
    },
    {
      imgId: "1iHGB3Dz4fFV4bWxy0GBvh7B-N6IvzKtj",
      delay: 200,
    },
    {
      imgId: "1PhJHdaH21TIrtI57fhncUh8X0v0Wy1sI",
      delay: 300,
    },
    {
      imgId: "1JADm_82OAZTHk4j7xXuSJP0mtWAxIyWE",
      delay: 400,
    },
    {
      imgId: "1IfXHevKKkcC0bcgSHVHjvrCoJNdNFPaY",
      delay: 100,
    },
    {
      imgId: "1C6dQHZ6l9KXLGrwxq96NvtvdEIxpSmUI",
      delay: 200,
    },
    {
      imgId: "1tpuo_ilqzeG7IQpnxwujH7-Pr3F6qdS9",
      delay: 300,
    },
    {
      imgId: "17XxCwTRPlafc4MLeJvY30lWXHWMmv2Wq",
      delay: 400,
    },
    {
      imgId: "1wUihpsewLC49Iu5seREoXIpda4SmhPba",
      delay: 100,
    },
    {
      imgId: "1wK4AcKzgOvoU-KE7nt-YTvdKhb1dFp1g",
      delay: 200,
    },
    {
      imgId: "1w8VpNxZLBzvJqtVsqoVD2YZYSIv9k3hs",
      delay: 300,
    },
    {
      imgId: "1wGNAsZ_Y3FXWktZ6gLx_G_llU4YnwNSu",
      delay: 400,
    },
    {
      imgId: "1wAnRClN9Zq5dzYphKQJ95_M__yN-KEPh",
      delay: 100,
    },
    {
      imgId: "1wYEzERY5sTZG0w5Denb90sfBRUWj67qu",
      delay: 200,
    },
    {
      imgId: "1w8AALbLZISWgYzH11R3FIibcKffZ5nU1",
      delay: 300,
    },
    {
      imgId: "1u8alntVO5N-DqapiNbs86MHWmA0UvdWq",
      delay: 400,
    },
  ];

  let secondYear = [
    {
      imgId: "1ymz5o6vWodacvpkVKwMuaafOGxbNJVY4",
      delay: 100,
    },
    {
      imgId: "1SHsXoeEer_cogXCntTgwZeX5rALbmL4G",
      delay: 200,
    },
    {
      imgId: "1YNlfHoihri280YeqeFahezeZkRpogx-0",
      delay: 300,
    },
    {
      imgId: "1_uA_zPNSJZtlzb_n-4nlnb3hQZ8-G_ck",
      delay: 400,
    },
    {
      imgId: "1N8s90YW-cF5QJJmff3O-XFGZxn0_py6g",
      delay: 100,
    },
    {
      imgId: "1PEgwSEQzu-Tjeng2IRVUaqamZrtx1MeZ",
      delay: 200,
    },
    {
      imgId: "1wzw-PD3AU4g9jfaPzl9zoU4SUwv1oe2T",
      delay: 300,
    },
    {
      imgId: "1ZtvJoNEH_Or-g-cbIEZqpkMhYOhR2beN",
      delay: 400,
    },
    {
      imgId: "1p5dfRbJf2-xofHbu3WaU_c-X60d7SWCb",
      delay: 100,
    },
    {
      imgId: "1gZCkQORh7HuILbUkb7p-w2vB8krwZzkL",
      delay: 200,
    },
    {
      imgId: "1gpCu8gyYtEX10b98gLzV1d4awzfCPq6h",
      delay: 300,
    },
    {
      imgId: "1ActmW4wTI2dQQjerpz853PMZJJpSrecn",
      delay: 400,
    },
    {
      imgId: "1Nw_7e-YpRbnWDAgBm3YT9dZe3-YXaSIP",
      delay: 100,
    },
    {
      imgId: "1VVZJDilQt_pOtJOaIXuehamiNrrSLZvg",
      delay: 200,
    },
    {
      imgId: "1HaIaoZJzy0LKATbzKeEXNck4ofNLkjzK",
      delay: 300,
    },
    {
      imgId: "1XANwMlW0jgjaY9vrfwIuBUAI2RtDHhTL",
      delay: 400,
    },
    {
      imgId: "1FDJnXpO7xUfpJVdG3FreOUwbg99oT3yn",
      delay: 100,
    },
    {
      imgId: "1s2K1K6wB9_9_5Wrlhn1oqjn8W5shVWwO",
      delay: 200,
    },
    {
      imgId: "1UBRhcsYQYn5hKnob1szbgDPSBJSIMNRc",
      delay: 300,
    },
    {
      imgId: "1gUrQiSMtt6Mtc0C9x9h0_7eUorIDtNVX",
      delay: 400,
    },
    {
      imgId: "1Ich51iGjJ8SVpw1M9VaD1fA4KXjxa-8v",
      delay: 100,
    },
    {
      imgId: "1IyjAzktAhPh9VroDBBTppVhGGHCjxIoJ",
      delay: 200,
    },
  ];

  let thirdYear = [
    {
      imgId: "15-gFFVOCfmwgMuQ-ytSUPNLHIU8xKaNI",
      delay: 100,
    },
    {
      imgId: "10aN9MlHBQaUWU1ICWq7QjjWhM5bxhrEI",
      delay: 200,
    },
    {
      imgId: "1uJeOq8YGIEt78pXd7Dz0ve7fY8pTAwiZ",
      delay: 300,
    },
    {
      imgId: "1M8Ih4MzvjTO94nvgrnPZlKT7b0hnrhXU",
      delay: 400,
    },
    {
      imgId: "19dhi6khAYMR250URNNl7LFu0vYpRr9t1",
      delay: 100,
    },
    {
      imgId: "1SugNmHNP1NJLw2cUNoyNBx-9k1_EYSOG",
      delay: 200,
    },
    {
      imgId: "1j5FrPIEbYtqTjjvh4MDy7wUeJeInoClC",
      delay: 300,
    },
    {
      imgId: "13Xv-P0B_urUBTGlWwOLfodMfOonGrGQX",
      delay: 400,
    },
    {
      imgId: "1Hh9GCpub_ujr_zfiwzdJZqv79yi7TMRo",
      delay: 100,
    },
    {
      imgId: "1zC3kqcA4cWyUw68Nd7qQlUoLBf9QUqiY",
      delay: 200,
    },
    {
      imgId: "1EyrirMdWqnZsAHB_da71AbSYVs_2Q7oL",
      delay: 300,
    },
    {
      imgId: "17uwQ0h2IKi0y4dRiR3uo1YrvgKKqFM00",
      delay: 400,
    },
    {
      imgId: "1BZGIVTLpQG9J_pmJQyAoRYRuN_sJU8gW",
      delay: 100,
    },
    {
      imgId: "1dWFhi6YWNPxvIa4SOJKe78OKq2ofOLCE",
      delay: 200,
    },
    {
      imgId: "1z0LtQdvAEKYzTUVkEOJ0sPH-EqwIb41f",
      delay: 300,
    },
    {
      imgId: "1y3pbnnUFYAfRbjMS94yp2flgcpS4Ld-F",
      delay: 400,
    },
    {
      imgId: "1cbmb7Eyop50br30f21JWOIDkH5CqIL3h",
      delay: 100,
    },
    {
      imgId: "1n-eo8-QVbKDbAsFpfvmhwIgpOybTy5j1",
      delay: 200,
    },
    {
      imgId: "1c4JLRoTdHSJUAr57XTaUct3WsONZjoot",
      delay: 300,
    },
    {
      imgId: "1M0CyzRYD5oxnhAotFlBZDk8kPXc2AdcT",
      delay: 400,
    },
    {
      imgId: "1M0CyzRYD5oxnhAotFlBZDk8kPXc2AdcT",
      delay: 100,
    },
    {
      imgId: "1M0CyzRYD5oxnhAotFlBZDk8kPXc2AdcT",
      delay: 200,
    },
    {
      imgId: "1c7JoorU2bOT7XaUuU6b96nZGT30GE-lr",
      delay: 300,
    },
    {
      imgId: "10ujf0WV1WWooUgnFVcKnpKPsuaWOCzZg",
      delay: 400,
    },
    {
      imgId: "1w5sjnOXocqZNb0xc7Dn5BKfRZZS65IHH",
      delay: 100,
    },
    {
      imgId: "1k5-ql3rP7EAMeNDh0lr97AsxAGJSBGdO",
      delay: 200,
    },
    {
      imgId: "11DF7WYClpkYgW-50DAfn1vA79dXoWVH-",
      delay: 300,
    },
    {
      imgId: "1xycGt0F9_Ohoan5Lxevciy2el8ovmblF",
      delay: 400,
    },
  ];

  let fourthYear = [
    {
      imgId: "1s1m4INRQ6tgdCa7BpIzZTkPpJ2QxZuy3",
      delay: 100,
    },
    {
      imgId: "1TDZjeArDrUQATxs0dMcP2c8dTX5FDyWo",
      delay: 200,
    },
    {
      imgId: "1vUMnMTgAz2ZRoJSkGBM4tGdkal2qFVn7",
      delay: 300,
    },
    {
      imgId: "1vdBx6jhUIlGqdXvoB4JxRlplVUpkQGtj",
      delay: 400,
    },
  ];

  image.forEach((img) => {
    $(".images")
      .append(`<div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${img.delay}">
                <a
                  href="https://drive.google.com/thumbnail?id=${img.imgId}"
                  class="d-block photo-item"
                  data-fancybox="gallery"
                >
                  <img src="https://drive.google.com/thumbnail?id=${img.imgId}" alt="Image" class="img-fluid" />
                  <div class="photo-text-more">
                    <span class="icon icon-search"></span>
                  </div>
                </a>
              </div>`);
  });

  firstYear.forEach((img) => {
    $(".first-year")
      .append(`<div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${img.delay}">
                <a
                  href="https://drive.google.com/thumbnail?id=${img.imgId}"
                  class="d-block photo-item"
                  data-fancybox="gallery"
                >
                  <img src="https://drive.google.com/thumbnail?id=${img.imgId}" alt="Image" class="img-fluid" />
                  <div class="photo-text-more">
                    <span class="icon icon-search"></span>
                  </div>
                </a>
              </div>`);
  });

  secondYear.forEach((img) => {
    $(".second-year")
      .append(`<div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${img.delay}">
                <a
                  href="https://drive.google.com/thumbnail?id=${img.imgId}"
                  class="d-block photo-item"
                  data-fancybox="gallery"
                >
                  <img src="https://drive.google.com/thumbnail?id=${img.imgId}" alt="Image" class="img-fluid" />
                  <div class="photo-text-more">
                    <span class="icon icon-search"></span>
                  </div>
                </a>
              </div>`);
  });

  thirdYear.forEach((img) => {
    $(".third-year")
      .append(`<div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${img.delay}">
                <a
                  href="https://drive.google.com/thumbnail?id=${img.imgId}"
                  class="d-block photo-item"
                  data-fancybox="gallery"
                >
                  <img src="https://drive.google.com/thumbnail?id=${img.imgId}" alt="Image" class="img-fluid" />
                  <div class="photo-text-more">
                    <span class="icon icon-search"></span>
                  </div>
                </a>
              </div>`);
  });

  fourthYear.forEach((img) => {
    $(".fourth-year")
      .append(`<div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${img.delay}">
                <a
                  href="https://drive.google.com/thumbnail?id=${img.imgId}"
                  class="d-block photo-item"
                  data-fancybox="gallery"
                >
                  <img src="https://drive.google.com/thumbnail?id=${img.imgId}" alt="Image" class="img-fluid" />
                  <div class="photo-text-more">
                    <span class="icon icon-search"></span>
                  </div>
                </a>
              </div>`);
  });
});
