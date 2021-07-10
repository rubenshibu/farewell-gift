$(document).ready(function () {
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
      delay: 300,
    },
    {
      imgId: "1Sod2X3Zlj7lOx6IafhWdyILjg7tTKJLC",
      delay: 400,
    },
    {
      imgId: "1_J23xE1CGp5inuEUYIBNovEdbqu-xBDx",
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
      imgId: "1-P_tYrqODCDyBrUKtTRCrD6l1JKT0FRW",
      delay: 100,
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
});
