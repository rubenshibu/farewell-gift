$(document).ready(function () {
  let image = [
    {
      imgId: "17kRX24qPHvyuRXU9JXl_E2cmlm7TFGe0",
    },
    {
      imgId: "17s_qfne-qwen-R4LeId4K2kt37ltM-0K",
    },
    {
      imgId: "1cxtBN412FSt7hEYFRHCLN1eW4INzqtMV",
    },
    {
      imgId: "1ukqVIm_dWZlxArWo6H13kCDLcTwckGir",
    },
    {
      imgId: "10usTgVjgHugQ7m9xoWEkt0Us7u8N2YpY",
    },
    {
      imgId: "15N6z3rle2F2BdX265a7BAjj2TIVNO_4t",
    },
    {
      imgId: "1mIQ2tYdFuEYfDnBCi3MYiGy6nEhU-aZL",
    },
    {
      imgId: "1PFIoeKwNl5ZaAzM-OtthGUnQ08RLw-fm",
    },
    {
      imgId: "1tf6EUU8iTwDWZuIClm2mkfujBI7f3dAA",
    },
    {
      imgId: "1JBfJ9I1husjiv-vUZ8e_emH_nd_o1Nuh",
    },
    {
      imgId: "1VatxjzfCHkCUzsdiXq8jOIahFzQVAVL7",
    },
    {
      imgId: "1fFPuQiqEHCENNgUSblzuPz7BLv5pDStW",
    },
    {
      imgId: "151xXgkP3C52yk4QUFYIaZo_fkyPsIyOw",
    },
    {
      imgId: "1s-4uXYvExEdwCW7c-bwsoxGRUPK1WYNR",
    },
    {
      imgId: "1m93FUS_KAhqpdjaUz06dGMdZyEcGZbwp",
    },
    {
      imgId: "1dWFIhbJDtXlYFT75CfX20cchOrQLvzPI",
    },
    {
      imgId: "1lQTxlF9pVEelrscGbGtRM1a5Qlvbok30",
    },
    {
      imgId: "1KxyJFtKPKmzI6tkOw6e2XV35SSWJEOj-",
    },
    {
      imgId: "1H0kH1wPxqktwLypBhff_6Ntt-pWD1bnc",
    },
    {
      imgId: "14hzKguHWQZ4zGJttVO9ureT8ELS0lU0h",
    },
    {
      imgId: "14k5fSXSht74bgvGs5gNnMDATCDlBmu2X",
    },
    {
      imgId: "14mbVPiALq8YBIiA9MhqYau3PPv0tcp27",
    },
    {
      imgId: "14qxyRJBBi04bRgXYjV2jj8NgS_uuY551",
    },
    {
      imgId: "14sln3lTHylG31dgCORJkdI_aqNClhP5e",
    },
    {
      imgId: "143jhKE4Khb8CWV-_z9Wtt0v9cAXEUwNQ",
    },
    {
      imgId: "14BL2Nyppt84Opn5Q3IEIEGhN8G2Uj8eA",
    },
    {
      imgId: "14J-mLDbp7QO1zUsU7vnN38fC3B3TwamC",
    },
    {
      imgId: "14L55Ad2z_rsRvxP6XWKYE6DqZMKMmSug",
    },
    {
      imgId: "14KsF3ESGVXgc6F6l4rnIu9OHjVORk0_W",
    },
    {
      imgId: "14OonPWk28lhJVhkP0kTu0RtrgpYdzjSX",
    },
    {
      imgId: "14XLLZPhqVps3fonyyNgRKUEgmLYYlLPy",
    },
    {
      imgId: "14fFpBt3VxVRbgkgRE0S0z77KRUiDtnNm",
    },
    {
      imgId: "17JKzVrDjJrR5_Q6dQq20W9wEwfikYUvG",
    },
    {
      imgId: "17G3lmWK274nuu96go-5sQtugRRZFbv2y",
    },
    {
      imgId: "16iMG2kkyBGyBy8Ccv7aUlRNE6Y_LlNbE",
    },
    {
      imgId: "16W5Mh037R9_h2tTBN5AcNSMlWkMEmJPx",
    },
    {
      imgId: "16Vu2c78SWmKQcZweKq984eGeX76Mkm_i",
    },
    {
      imgId: "15amHIVmjA8pqzhI8NxtBMg8AW_7KPqQ_",
    },
    {
      imgId: "15dBvlG7GULwfxIdHP_Gk51DIIp4qJMfM",
    },
    {
      imgId: "15T9dblepnZZvmCTJqNKzBi7ipa--zIDh",
    },
    {
      imgId: "15Sw3HCHWg0FzkzZyZtfwV8sACbArUG2p",
    },
    {
      imgId: "15NdYBLq8o-gAUniegtJtJtZ7kf28BCzb",
    },
    {
      imgId: "15HthIWhgmJb15y3wDlNuP_sNRJgjukmI",
    },
    {
      imgId: "155tNuyC7JeXjDjyP-TF6VrRPyou_nCjU",
    },
    {
      imgId: "155EvVeCFjmAmY9B9bTnuT0JVL-h7tgG6",
    },
    {
      imgId: "154f5jrF5EpKdo-xkbq5y1nLoTsHHASQl",
    },
    {
      imgId: "151Q6jIE99_t9Wpmlzx1zUOxWHveW89gG",
    },
    {
      imgId: "14tfBygodf2EhXslo1MFAuFr2lf43HK3O",
    },
    {
      imgId: "16PNyPPaJA9R3CFKbB0mImj5ZGEztywom",
    },
    {
      imgId: "16Pkl5PHFJfNw67o3lH65p1bc0ZIFoJ_d",
    },
    {
      imgId: "16IInFYK0TfEskTTbngqm5ALGn2bVCJkN",
    },
    {
      imgId: "16Fvjge3PuABdY1Wj7KusljjbTcKT5caN",
    },
    {
      imgId: "16HkaRbDX8SCFGMwyBRqiS4PEhs8zLxxq",
    },
    {
      imgId: "16D3RVZ8fRK4leLH_kZfGoClxgYDDPMUH",
    },
    {
      imgId: "169IjwDRbckxwYvi_vE0Kufyxv6E_1tzO",
    },
    {
      imgId: "167Xv97pwjsu7wwEsKX68Qwcx4xRnF6a-",
    },
    {
      imgId: "1679V-8XjxTKzlyw7fW2Q-WKinlA8WDdb",
    },
    {
      imgId: "165PgdpCrZ_rcbc9aVynWSkNZ9ALyWxce",
    },
    {
      imgId: "164bxmE85Du2MsW6C2Ktr5M6sLiDj4zwl",
    },
    {
      imgId: "16-fokQjE3hynUf5cZKuecYShVRqCAm87",
    },
    {
      imgId: "15w9EgkMTezmYG-itSWwAz9wnBd4QHowX",
    },
    {
      imgId: "15vSvg7QlE98YpN6Zzr7yAi39Y9xDuZn7",
    },
    {
      imgId: "15nFa4w9IRcZjNfnsTu_TsOodA1FAKzLs",
    },
    {
      imgId: "15m4qZi9KKrTuW9GuM_n6wvuQMjQ9b34r",
    },
    {
      imgId: "1DH5BZxfSBV99w7q3N4HmFO1MgoR_Yq_R",
    },
    {
      imgId: "1DH458PQXJ2zyRh4I4X4BrAKyzcW7CEeX",
    },
    {
      imgId: "1DEfKzsV1gDtodPjSiB0lA0TauOVL-gDz",
    },
    {
      imgId: "1DNWr0zfqId_yiEOjoiNzMmCpRXiGIRWP",
    },
    {
      imgId: "1DMh8nLhvlnTBQhoWjGu21LJdaB58rUwD",
    },
    {
      imgId: "1DUFIWGIsL3_GVSbBiWRF6v6n3w3N80vY",
    },
    {
      imgId: "1DSvyCFXe-kGVVmcqDfB3gfM92QiGgeYP",
    },
    {
      imgId: "1yjFWV8r7CvuLPTAgIXYH1P33Nc0j6VUC",
    },
    {
      imgId: "1CJegedZyoVt9dfjW40DgRuCCc1aUYzke",
    },
    {
      imgId: "1CIBl__T6dlD3s_61DyIA1jkMpVS3NoI9",
    },
    {
      imgId: "1CBOt1INpF6omr_E0FR_1XY7ZJH-Vq_JK",
    },
    {
      imgId: "1CBGFjYENLmLMxYtuVIwZGnbn1QrC0uKt",
    },
    {
      imgId: "1C-XQTNu-9Gr86leXJLAS7nkUoKy3OqfP",
    },
    {
      imgId: "1CQARZNOIhnRKZn_ViYRbV5par1s84TbG",
    },
    {
      imgId: "1CQZTkTGv_9EkADens8CUOAxMoZMbGLJP",
    },
    {
      imgId: "1CS-GIV43H7TukxD6ZKZTKk-7vC01dSGY",
    },
    {
      imgId: "1CbXk6W1LAzBOu1OzfptcnbRT8RIrTTMI",
    },
    {
      imgId: "1CdI67-fxRLIaMkjZqYI4I92bkcS1_GKL",
    },
    {
      imgId: "1Dlw5OTvvNTZQPcXuMSditAYLljpgjh3m",
    },
    {
      imgId: "1DiFjAoLVOqhT3q8CY4VHhuTNGvgo6tiI",
    },
    {
      imgId: "1cxNahRuYx2cRKCsTziUwGt7YmZVtwFvo",
    },
    {
      imgId: "1nTh_pQpijYIwiu8GBwcggLkGFP0Zulyc",
    },
    {
      imgId: "1CiES0f00saihkKu4LqvGz9JdRVgr4dHc",
    },
    {
      imgId: "1Ck459614BZk_h7hVnxXiI-OOa4y9iydQ",
    },
    {
      imgId: "1Cx5f7RVuhA92_5i5VBcx4JcGyHMFMm7R",
    },
    {
      imgId: "1D0Re0IL936hixKREKtdZOCPY5QlY6w0P",
    },
    {
      imgId: "1D8wB8TOy1JvppfkJDlu7xDckJ1n77srY",
    },
    {
      imgId: "1DY8PZQAlfM7RFLqW0MS_HuqFZcJoia8k",
    },
    {
      imgId: "1DWqBbGi_f9YhWZbdvG0_rrLiq6M2P8Pw",
    },
    {
      imgId: "1DVVqQ4B6WYhUj4rtmjKpUIyfCEeBv0bw",
    },
    {
      imgId: "1sa0wPsIn9YiXY4IuqZIWTH7DLvZIXHVo",
    },
    {
      imgId: "1PCdVxUFTINdGcXYOE65_vyXBWcdgyKce",
    },
    {
      imgId: "1FCmgRVs-mNT4aNBCp5Ky7YxiQhSZWLG_",
    },
    {
      imgId: "1VrfLLtD8CjzwDch-soyCWxWW07Hn6ssZ",
    },
    {
      imgId: "1sra43nVILQiJujg3XJ9Eo7yzZ3vmxQR4",
    },
    {
      imgId: "1-_0jBgV8b6_MrPamjOCQIfuN7AqsEo_v",
    },
    {
      imgId: "1fuvPG7r1r4C2tQNR3kO5MiBvN05L_R8_",
    },
    {
      imgId: "1IumFXu6pTfyqTBzQPOUvoPoSazpQaqiO",
    },
    {
      imgId: "107-WNsZ6pBCcz8FWKWMnScg0o0k4Qjcu",
    },
    {
      imgId: "1086dCeFr5v5LpSQLSaDPf49qWWZdg1i7",
    },
    {
      imgId: "1B-n2Hyt6zqNyyes1rarS9ddSD1mUI4_D",
    },
    {
      imgId: "1G3CB9anUNKTv1eiA7YGnkD1xa0d-0zTl",
    },
    {
      imgId: "1Sod2X3Zlj7lOx6IafhWdyILjg7tTKJLC",
    },
    {
      imgId: "1_J23xE1CGp5inuEUYIBNovEdbqu-xBDx",
    },
    {
      imgId: "1_E7st64sbGizqa-6bzWBs57Yws3UDJlB",
    },
    {
      imgId: "1_Cwtw20KhqfinONt-9oax04I-L-mWdKs",
    },
    {
      imgId: "1_Ovl6bboXWkYLlJahpbgZN-f1aSmRGei",
    },
    {
      imgId: "1aUu7_Qb9lOI4KP5l1WHdI5kxqKvmHWJF",
    },
    {
      imgId: "1_eUuBI0eJ4Bi5k92nZsMTdaSWOaZ2gMT",
    },
    {
      imgId: "1_mimsfkXgKWXYiTi0ZICw-R_YfC3-QtJ",
    },
    {
      imgId: "1_laoIy4_jmdt19R22DeLqNn_-z3mWQpD",
    },
    {
      imgId: "1_ujGHEhYqUVvoRazdgvgKbdBdEF9nwOU",
    },
    {
      imgId: "1a3-FNFEwV8wJEwkgjA1Mvm57NvTsLtrO",
    },
    {
      imgId: "1aCybb9f9CLfr4pGgTGv4K4IZH45YkkBg",
    },
    {
      imgId: "1aH5Mk3cVEIDP19dSH8bEuO0SojjC84di",
    },
    {
      imgId: "1aI8wTYJxsO7z0mSoK1i6b1uH2vfHyXRG",
    },
    {
      imgId: "1aEfeCe5qmup1dNzNuoV4OzmnYQgvHDTh",
    },
    {
      imgId: "1AMZW_O0Riyn5a92XO5LeRNDfJrWIF55Z",
    },
    {
      imgId: "1lRrMq-DxAtrjsuscaV5q1lcKrzxkBrFr",
    },
    {
      imgId: "1cw7vaTM1BAh3Y1sWibRFWJk8RIdPeip7",
    },
    {
      imgId: "1cw7vaTM1BAh3Y1sWibRFWJk8RIdPeip7",
    },
    {
      imgId: "1QastaK55UVU4wzDgBwKwtdQYmffzqw-H",
    },
    {
      imgId: "1mzziMKaLj5nPgpDooBWxi_0gAHZBTZqQ",
    },
    {
      imgId: "1eRfUrY6z67qPNzCgR6rPw93ef_AQJDcW",
    },
    {
      imgId: "1lwXfz2xQsovDNFwJmpbtlApi3qr0YPBu",
    },
    {
      imgId: "1-U_b4Ad9uiA7z_DvkXGjqrtu-wQZ6_24",
    },
    {
      imgId: "10EiAKStYSS1X8F-hSkY3oqoGtk6LD4Hr",
    },
    {
      imgId: "1bX86Dpwd03G91GbayABXWJmEP7YBkxq7",
    },
    {
      imgId: "1ASo-NK9PaoBs2TOIA5UfY6MRLEHKOUO4",
    },
    {
      imgId: "1I7BLIet-WyNY4vAdDamKyTuXlnbrdWng",
    },
    {
      imgId: "1WtMfjaFJ2J_hBQ5geF6tPUxRlhjSoWwZ",
    },
    {
      imgId: "1M2DWLBDfi94_ww2NW_7WudmE2U17mD5Z",
    },
    {
      imgId: "10iw2TYH0hYlKPiL5Wu84SKdRT_efxHxe",
    },
    {
      imgId: "1GpIZLtBeAxcsQOk1chus8g6J7_HwJjR4",
    },
    {
      imgId: "1-QKx7PhDmcTJxW6rOVHirjm1YbPO8yjE",
    },
    {
      imgId: "1-Q9xm8U9fDDDJM7HMT_sDtd5aFDt1Pi4",
    },
    {
      imgId: "1-Q9xm8U9fDDDJM7HMT_sDtd5aFDt1Pi4",
    },
    {
      imgId: "1ztswBFnquJI2IzBej6RRMsqu2cbe7D8V",
    },
    {
      imgId: "1zuUToeviek0OBH_1Hxl4LhIWef85CXRr",
    },
    {
      imgId: "17CDeJwl8ImAQs7E6L3QIo1TSe3EYfMhS",
    },
    {
      imgId: "1-F_N4BFlRhAKLU2DZ5JWeLgsKI9uuB02",
    },
    {
      imgId: "1-GN4G_d-THcf0MzVjDhw6-UGQ8m42Ynu",
    },
    {
      imgId: "1-Hhv5Lt5xe9QQtuRQ5WtCiVpdwXBh3Hq",
    },
    {
      imgId: "1-I_PgTfULm-VANIVs62R2gzFW8U3Jx1Q",
    },
    {
      imgId: "1-Ok1VU5QF1e653U27I-aV199oF8YAhgc",
    },
    {
      imgId: "1-LfGNfq20br7aoDwvNQc0YrPWvDgSIGJ",
    },
    {
      imgId: "1-LunQwm3r4yQDkXibC99tpb1j0zJNubW",
    },
    {
      imgId: "1-P_tYrqODCDyBrUKtTRCrD6l1JKT0FRW",
    },
  ];

  image.forEach((img) => {
    $(".images")
      .append(`<div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
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
