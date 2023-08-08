const express = require('express')
const app = express();

const PORT = 3000;
let driverData = {};

let nearByDrivers = [
	{
		"id": "DRIVER_9ef3f1deb87d9b8a4846e1a2e12a707b_1677554243",
		"lat": 26.1634237,
		"lng": 91.780804,
		"token": "eUIa9c8vRRK1vtA0I9h_WX:APA91bHgymjjYN9PlVfbN-Du7l7obGSF7r_vulHEaQM7Q_-mdkmx9piXlhedzuYIvvyVsECqj7XfBfJ91uvgjDcIlPJ3TSMGc1DBDlYE1keBrAVOfvnFfEG3QfJ5cdjNICHw858fQE1T",
		"distance_in_meter": 2982.9027113181987,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_a8afd927683bc3258b2a67292fb9a931_1690117007",
		"lat": 26.164608,
		"lng": 91.7807911,
		"token": "d2M3XlvXQ529RHMETqmNa9:APA91bGJhRItqinvu_HA4hm7K0Acqv3dz07JkR4bE-jSyNXsLIMmjJWpHgXa1ZoGOEWeR9UP8L23HxZpyJHmqsTPGQCl1tuiBX1Q6Td4MHuEBymeGorkJckD8kXXNgw8IdL6lYCZ4QKC",
		"distance_in_meter": 2936.5974875072343,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_eee4d03b13cc1864d6eb3656b136e2cf_1682668829",
		"lat": 26.1779155,
		"lng": 91.7816961,
		"token": "fKEHjAZ2Qx-xZ3JieHzWsQ:APA91bHaI-Xx0SeiAVEZDrSeB9MPXiDubIgkZAzCWEaQueovrOjJh9zxKGiBKACmU0Yv5w7tQ2dzdWrSIKUjLHKlUDAM09NZzvUt4n_vQESiyCefkAFOqkqZZht6BXss0LCiJhvElRaA",
		"distance_in_meter": 2917.9774204121145,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_25462aa3254ba01aad8a41df8f9eaf74_1684477585",
		"lat": 26.1559912,
		"lng": 91.7314576,
		"token": "eFHlqj3ZTQW4sF-MdTBGOd:APA91bGDQuWPVuI9VMM1i6bqxSzo3XY1pOvn24w6Qtn1EfSADRDMSk_UBRF7gmNCT8JdAMmsurtqHSII-VwYXt6iLrdWoCqtEgcQZJ0WmO_2YNrxS_2sK2WxWoHOX2dPpFRXofYweEoy",
		"distance_in_meter": 2865.9168134199526,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_298c5fc7baec156ef7a3968943d16708_1681260679",
		"lat": 26.1668318,
		"lng": 91.7802397,
		"token": "cBc4n7MsTYSr-8pyBew_h1:APA91bEvqSOVVgd3nIKAqXDy-eurO-RJdJDr0G3ir7OU2QXyc1cZoE-lqndQvR9-b8Z6ecVPqftEQ9b-z47BSMSVnJgPoVvynIgqRFuHmCI6sReoSyddhiW-jOMkS3s3ZnwnfqihzX8f",
		"distance_in_meter": 2813.0597514738392,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_78601feaa38eee5fbe3c69f7964a669a_1680932164",
		"lat": 26.1606727,
		"lng": 91.7768227,
		"token": "c7OUoUQeSwqX02uNchnGLW:APA91bGoaRSu3TmsMpNTOh9aY9ybaFE1wB5wMCQyDZ70PXTQodpYd0XX9ZBK6e5TYGO27RinVuY_pU_6caZZClbq9ptqE88yn3a4WavFwpOnA2NeqOQRO73wEEDV0BPTKrzy8s0aPaWm",
		"distance_in_meter": 2757.0523329587813,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_d9350d822baac7dba31451718d97c050_1683526632",
		"lat": 26.1862382,
		"lng": 91.7757866,
		"token": "cxdm8xicSV6ANNJCi0AM3b:APA91bHY-8R_pzgcl6tN94F8qoyswG8n6sILSHvjoXLluzlNPHJn9AyCR68jXhwUShaUiysTeQQPNGOz8Bt6AQJ4HIjfeYnf7KaceeAmBwIQmFizWb5OeI4oAwD1-ADIH13I8R_X3ayD",
		"distance_in_meter": 2704.7224802096607,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_1af8f517e35c1eae7b416cdc50eb8514_1686746658",
		"lat": 26.1592111,
		"lng": 91.775144,
		"token": "fzCtioBQTIqAXSXwc75C27:APA91bHsVPBXKXj_E3KgX93vyM1RGKC-XQ_kvktdnycEWMyVjkrBF5f26EONNJzIGdEIWks5HiDVedE1lQ9-tRHKHKU2fCmVSWu_EfvwPYognV3P8OO04496liHhNnwCAOTxSJ2Lb4qN",
		"distance_in_meter": 2703.307608514588,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_44f771f3537eb8f0abad0ad8a6672999_1683004312",
		"lat": 26.183809,
		"lng": 91.7769845,
		"token": "fkfrOUnJTjOq1YvtUcEg7C:APA91bEL8aixTaqPySn6Z96SDApTMGb2n-MiJFJSAi_-MVxgxAzNjyyc9WzkLc2tDg8NfFHfavvUhBCd2GFLwVeGGN1-b2In7jDS53ObAKa_LktYUhKqSwf0DdDvDxB44VNUUDWBjaT1",
		"distance_in_meter": 2676.1996708617344,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_c55abe7495a38b8be6b719423c3fdf6b_1688718980",
		"lat": 26.15081,
		"lng": 91.7627917,
		"token": "dU957EszQOeGByqvONfKbq:APA91bEWv0sAGvh8rtAiYsWmmu4SDgWZ7dztGzJWL2pSYxeUGL0vZBrrx5gxVNgt9zyAde0G_QKdf3BeMa5HqMjquJx5rXIP3D1KYjUvNA7RAWN085tIheyWCkkjbblN9xJvJPo8vw4B",
		"distance_in_meter": 2669.7374631449065,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_e8e39bb3126cedad4ca51cbe70a2cbbd_1687268995",
		"lat": 26.1526699,
		"lng": 91.7669296,
		"token": "eDleLXSgTOihqGkH0ekuy5:APA91bH-eiZTf2f9HVLn4wajc01endMMJHp92yFM3uvYWG5szKFl4SWWC3h6JkgAdpOl0naMofbB3_zl4swSc9t4PJMc0NLSg0BrdBlhdkwSemv2CYwRHYGwuSJG3iXX-y2pQqGOCZB9",
		"distance_in_meter": 2669.657444554037,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_1916c7fbc6f7a202e3e0aece48384382_1683704972",
		"lat": 26.1578917,
		"lng": 91.7731283,
		"token": "dpO4SINxSc2NIUS1LswOYg:APA91bHoJZXD1O722oPI0n3V2NjGCalagHipyikQBuM1PtKUqw4Cxgm5-B0QIuT2GWbYQPlhfeTpzmLtHjjgkZjBO4VY0uxtcPLVxE1OkOoCMIHsXdKkGdmkDYomf5EJ4qJ3A0M3zyib",
		"distance_in_meter": 2633.026829103165,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_9fde4f39e7dbd69dc4473546b05affcd_1689403058",
		"lat": 26.1852653,
		"lng": 91.7752266,
		"token": "ey2t3fo3Q2Oa-TBTtBjwvl:APA91bGNjlk7VmHa_CYArXbnC4jzLvgMg_ApjwcZvU51Yk-TJOD-uVxvatjCNjWKlvWLw1YMIpi4MYzpEZGGv0sacHKI7PGsG_yQ21lSm5AvPVc2nMbyOTJlDI2SXUhVlP7LV8l0LSt6",
		"distance_in_meter": 2600.2194415262743,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_728834ee30107e55b91742a90e3cb55c_1676795504",
		"lat": 26.1778502,
		"lng": 91.7783971,
		"token": "fKWqztbMQDGwZOtFG9fbbp:APA91bHwR18EHMpikY58Vg4baOw4tz9nJFykZn3IE3kcS-618UsEN_b8xCu9Vtm87tu9oDAfJqvRyAWCU7fJHjp86db4sZRxcdI8K5pz6KF7Jx-M5BU3CtFd7pTYHRIOV0aZS7KUZ5oB",
		"distance_in_meter": 2593.6957618359074,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_b4cad098e8279c11ac130004e03acfc1_1680797647",
		"lat": 26.1836772,
		"lng": 91.776116,
		"token": "fZXHl8AHQIWoC5eFd4Vplr:APA91bFoWZ9hkPyuC3o0IWcbchyI2URFSlKCbwNIp0SCs70cDK9tJ0akseNHU9FFGQAX8xgLSjjA1bklOz05xLF_6hso0H_4NFj3v2UF9idGfYG9cfKWYkzvVx_cjnZXJA-x4TA_68AP",
		"distance_in_meter": 2592.1842821763034,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_7aa7d28551519d38a352dff63a4f4c09_1680236675",
		"lat": 26.1600287,
		"lng": 91.7742311,
		"token": "ebjCNu7xRzSvYEUmBPC517:APA91bE3STEzZ1Th0pSTFTcf5QvfdWOyetoiOHHExMy3Dwc0XyIYnXk5abLJAMWvYIv5zeoqDMo1VrTHIWqjAHeeYP5BtgFynJBYDJQ_Yzmk0Yh5WQTgA2gsyp4wfDZKYmiqIxwrRRIa",
		"distance_in_meter": 2576.7520416259044,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_fa899dcdaec296cde0328e1b2795917e_1684996208",
		"lat": 26.1600297,
		"lng": 91.7741971,
		"token": "erFG4O1QRC2JUJwau1-nav:APA91bFqrq3G48hOYO2gZQJl5bf7Ovy2c4y259lgpDNCL9YUTptPGL4ZjZS9fjjdH0D833McCab-9PFk-XDH6HLCE-ZFXEPFrSuhDBn71u3kdxwkbL-snTX7FMs_QUjzxdQ9rV1EHHdB",
		"distance_in_meter": 2573.8937850851635,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_cfcb63a424b4031a5e52f853fa7cbec9_1680077122",
		"lat": 26.1716529,
		"lng": 91.77853,
		"token": "cgXud4AgSKKGmQJiyRgBvF:APA91bE0c2Kx9LJwE260BunrIO8OFtjmscKWOA-f_UJi-BZ0AzeA2zrz82vsNZ5xwKRQyKLDI35jfa9FIrOHxchYQ9lzDqlLvNna5wuYMdM9bFT1BeaGbh8hDZDtvu55ENpFvdVVEwv6",
		"distance_in_meter": 2559.0862321148616,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_e40ec7f468753ef83a3593131ccaf58b_1683001140",
		"lat": 26.1580133,
		"lng": 91.77211,
		"token": "fghE1BxdTXGZ__dvYtHwF1:APA91bGbCMIXmTMTEfXZM_p1699ZBUax75Hg7RXQp6hvlb4Ep7XJ7CoiFlfC4NEos85wG3nldbjqoCP_KNvvw9L8LgWjQnaWkjpXrUmr7t5uS-Ch_56Am_c61baAyJOVdnYLrux4L7gX",
		"distance_in_meter": 2547.21314095463,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_d3c1acc96c02852fd16546325ec93d6d_1688451033",
		"lat": 26.1712608,
		"lng": 91.7778396,
		"token": "ePB7q0DtR7O5DMk55cQrg6:APA91bGVTFKhxpTTn9uZoKCH-IGcxfWsOdql4NmFKQUJa0uatFlRPG538BCCLPq2WDpKUOM6fOsKRFj85NBNWkAverE6L037xPOfV0oMLLlYFhKHfbOL3ipxPv35Xk_PYPF8VdnG7cCU",
		"distance_in_meter": 2493.6683395907007,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_866415b8531e269776212d55a0db051f_1690949487",
		"lat": 26.1748764,
		"lng": 91.7773005,
		"token": "cRpYkFsoTkKLUqHXQxb2Sd:APA91bFsbJ5UereJGF7cXMj_DJE9WxVh5HUNibw5fEE9R0aMD-ZOAzaWM8FNIvuLRsrtE_6Ro64GRvG7nwXNbEchMhvrcNWygXPMYcMa4fo-8eDZLXY0tX2tzajRZRU7zS7pdZbuOGkc",
		"distance_in_meter": 2438.70760096764,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_6bbf68559b56407c2704041eb9a8659f_1681381809",
		"lat": 26.1947024,
		"lng": 91.7554391,
		"token": "e4WUP_JZTUWXc5l4o2h3UP:APA91bG4Wz8ulpNQl2-zTrsberKhCFz5t3sVpipvJCe5a2zXvO_wo4BbzatOvjJ-Rr7utZEnf6imZ4j6PzIf_LUHfjte5mYCxX7TKdjG9zj0kobI4QMFbyhPQuUrt-3942Rl0dONbKiS",
		"distance_in_meter": 2408.403752751108,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_79055b3564e3758bd8b1ad78a40ebf48_1683260727",
		"lat": 26.16165,
		"lng": 91.7721555,
		"token": "c8__AqbPRiG2u_Vc5_9zMV:APA91bG9Q7zrRu5JYK04ffnqWulXk9rTrs_RvkfnPTMOxhQnTslcT3FF3ydfyD88NfI4yDaco10M_OkZCXahXwQJ5635Lbt3cSk_0NVW7mCMZFsUw95nRLmsbRr3viNvKCSeEJ29Rc1C",
		"distance_in_meter": 2304.3900474007273,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_9c4ad241beb662af175e8affa9292291_1683185768",
		"lat": 26.1566578,
		"lng": 91.7666921,
		"token": "chIFTOUBTVmgFRkvUxeKC6:APA91bHe0fti3cCqs6v-haHricLiaIPacgvpuGJjfBqSrwL9-8-2KbD6KJa9j4UjaBZQUwuLYi32dOuYyMxhMQWNVeqLfXAogu7nBxMUMKPChaA0cbcmRXMcffjUKeTDVJuF8DfFXFyf",
		"distance_in_meter": 2289.474780375447,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_e507a19f59c6bc660c19ce10edd7ab44_1684860367",
		"lat": 26.1835812,
		"lng": 91.7721021,
		"token": "euU5ZDTLTyOkIiDX6knELt:APA91bHPWZTkITJ6ql4NNSa2-cTvt9O2vm7nf_UuuF0AqTCTgW6PuAKMfeeJDctO1JQgyVqGVhT2i72EuT5P5IaZLAFnsKowPAii7-dVuhdJCwdeotzYhyyTPpOnY1TmJPngto10BKbV",
		"distance_in_meter": 2236.7794433305,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_c27e6d4443e5f920ba90ba5ac9601b07_1687349837",
		"lat": 26.1792755,
		"lng": 91.7741057,
		"token": "erKUYwHoQamc8llS9Kt3_L:APA91bFyUUtn7Q4eYnx5ZBjySpqwNVKRna7LZHWIpnHuUY8IOVYzoh4CgZ4TS4rVRFyIA2QV-vktEgUVlq5A5Sb5lgv0LNWa8oNlwquRcVhn3NJpmCr6kB_eCt8P4aTL7zBySyNoeyqK",
		"distance_in_meter": 2219.6329464568385,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ab56231b887469a0f2363cc491d08c06_1685918760",
		"lat": 26.1624003,
		"lng": 91.7348956,
		"token": "fTiaOK_GTAiC2ajze0_6FW:APA91bGKT0WDx-fhCA138VT6vxboPFlvQJsYF8lInU5D6Rjdy_snLD7DD6Jb_KMqwRocYjmHh1v-yu8kJlNXWaRTkMbBQeUHzsFotVVmViAoYaodD7reDxL8trvejuY3tV9E9aGGChPB",
		"distance_in_meter": 2157.790405918073,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_48e95ba9958dd8a89bab4dfe889ffc6f_1685856651",
		"lat": 26.1749142,
		"lng": 91.7313863,
		"token": "ejuvPucyQnyuWiND9RHmI0:APA91bGGvH-rBT_fO0DzvGG4duWQYYb4SzRes3zBGcHOB9pX6nOoZL1Afn8Kf5KAqzkTYVqG3WeVkwUGDpuTtjjrYYYWvxoMz1qGeLxXkPPM-1czTP4hDJQtR7C-sC5z8DyiEfG3jqV6",
		"distance_in_meter": 2156.3610932380752,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_31064a76b11b733940b39321cc1773f3_1688887757",
		"lat": 26.1765441,
		"lng": 91.7733097,
		"token": "c-THjr1hQ7m-1OMR6Fcxni:APA91bGpay_KSL9S86jgA_O3t_eq4zM4dnXPIII7TKtISPRkm-r-Wxn5_Q_zDsiRj-iF2G99M-UnkdiEVuuVhMWd6L-g0s5DBf5q-7BEG3xmc6KC4SS8f8ifA0uYZ-K-7zJoA8DEH6ED",
		"distance_in_meter": 2067.9339690318143,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_de44476a186c0426fd93bb1398d2e82b_1685244388",
		"lat": 26.1718367,
		"lng": 91.732465,
		"token": "dQlgDrZJQ262fVS7KOy6fo:APA91bEIZ2W1hxBsNOjUyfcz3Cq8L_QFwvFWTBwmnuPIzqD1TmkMjS06RFx-38LOs2HLfNAohUGCgIdZ__mOU4trmDcI8oUKvPSOoXdOKoXCYxXbPa1Y1Hz3Ba-fOXLkMN3CdGY7TfG8",
		"distance_in_meter": 2044.9877525618158,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_41939f2793fcd73da31bc1c56b61fe3c_1682847594",
		"lat": 26.1770881,
		"lng": 91.7332115,
		"token": "eLej3jCURQmXidqQWcZuPN:APA91bE-V5glh2VfTEPDPIZwxJIyh6otCFwyFXowBFhw2DJr48U_6mHUcLDKPTIUYESDS0gX3rMUjaUy-P36T5lNUwbsBD777D0SBBk1ZqCkxgYrmORBGuFGvOGV3TozQQdv7U_B1LP1",
		"distance_in_meter": 2013.6185214184668,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ef67524823a5c8be205b10dac9f4f32e_1678792175",
		"lat": 26.1595992,
		"lng": 91.766084,
		"token": "dlzr1NHERxKXFjb20KMqEu:APA91bEZuc_uDL0aqCr74sV1-w92damzWaR8GN4l2CGKfJt1IRV3bLaAH1-I7eTAyErIb-Vx3DsD3bSoV0XLro-KzVJS7UYg6MyPHwvFrev_Ov_1fB-aP-pke2IGuk39vAh6AA8J7aKP",
		"distance_in_meter": 1997.0545889847454,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_5fe65d90217273b2f463d864ccc08a11_1678436514",
		"lat": 26.17734,
		"lng": 91.7334667,
		"token": "c3sPNJWcS0-AHNoM0yYh3d:APA91bEVnDQB8VtfCa1lfG3GnvIllWzi_n4mbKPROKj9R8y1GrhX2jGK4V020pjViZFMIJKL4fp8XDmKyKRtv5qb5eoIcjKkY2nt3dJRNTQZYPQ3sktWWlw7cayS2n9i3mmBHxLLqVv_",
		"distance_in_meter": 1995.1405727718868,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_196d5f7d61204838aa6912143fa0f46d_1680515040",
		"lat": 26.189271,
		"lng": 91.7461494,
		"token": "faXDX-cmSfKMcloTcFxsXd:APA91bHXyeiNg-OjUnOsOuf9l_ilXDx-fjqI6fVbqitNPszmCpOKFm6V-S1Oxi4Qv_2qkz8OLz9FEA-r44mVwC71k1lYjufDBW9P9W1HzH7qobRzmRZ_c3CuSmHnmgAgCSzCHH9YKbMK",
		"distance_in_meter": 1914.7935314405922,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_e316d7ed5f5dbc1ab254bf30258d21a7_1688559210",
		"lat": 26.1587826,
		"lng": 91.763029,
		"token": "eRpHt3KvSZKrjoVJPG_oc6:APA91bGygmQNScPTpg7Wg_MU3O6sFWsMdSToUrtCLNnmvBvZXySrU-TWOSj9alwFzd4a6tzXzo7GcvmaLHXfUNaB6FXyvNFLiU1PR3xBTcfAwY9Xr9QkFJf1m0pwn47-nictQPUZthF8",
		"distance_in_meter": 1887.4948928553672,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_c42dba2015821f7290e884c9a62b343f_1685613378",
		"lat": 26.1900485,
		"lng": 91.7546321,
		"token": "dC_uB3eaRMOfbHjjy2MkLw:APA91bFgU92foc5j9nw_Z9F8dXjf068rXfKWzh-sbOwG9ofW4PF5ePdtHw4iVvcTestJFNXgpfVVG8xpCo9Oy25SeHohrSrVV-cLI_7y5OEb695-DiJZjCq8EqTRJb637QLYJL1_eR8O",
		"distance_in_meter": 1885.912396125617,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_355f1ed3833f55ae0c766e7313a953c1_1684488511",
		"lat": 26.1768122,
		"lng": 91.7713758,
		"token": "eHXEcOHKTLGpqL21PQp1ls:APA91bFo8Ic0N56vhIVP9xt5vqcqFruqwDi9pe1V0AMLxQ485LE-Cy7zGdHmGDQpucy4cQAi45QUSrl78pfSAaSLyRx0sbZ_pNII3UNCDH-kZ4rSX552MVr8pSsrs6GUM2EXggFASBU8",
		"distance_in_meter": 1884.8771637049458,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_c39915f9ec5f2131e30f4a915323b35d_1678597161",
		"lat": 26.1622333,
		"lng": 91.7671017,
		"token": "cawqCNKUQ1a3XnNp86RKas:APA91bEWdy6xSrc6bYs1IWqlswD671PRkfJnssLOj2qO53jv16a7hQfEicveyNX7bxHz2T8U-7s3ofQRur-CNHFh4T0XvPw-ziwfrY-ppmtC16R1w6y2jRIjgBlPkcg2oDZLPjQfmuxI",
		"distance_in_meter": 1862.68535141506,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_bddcc80e4b5b1383d9c424734c2385bb_1680966344",
		"lat": 26.1647367,
		"lng": 91.7690433,
		"token": "fQ9Xr_Z-QAKowiOz-rjHYU:APA91bEM4ts7a-6Y_EkhsPmL1ULQLaPyCSuWp4PImaJnejVbuUarRGGfRfN5Rq3GLjJT4U7EhKgjHbcbndiYCEauEhX-JjcHjSRCYmtLt-SXgGhs1H1WQ6YAPzHGJYki6rs7L0UOJT4p",
		"distance_in_meter": 1859.4507459196836,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_8e4b3aa265c6fba5fbd6ce88a4b2c9f6_1679573435",
		"lat": 26.16272,
		"lng": 91.7674183,
		"token": "cnKjQ4OaQJOHk2e-9iHQXu:APA91bEIdbypSSfhSPzTfRlBRhoBQDeisP8U0ncIRAwtNrC_94miHJBTSvWqmkTUOX5wxqmVAiqf7ntMBZdPeiyVc6tChkjE56-3P5xCLGoi1VtRIxGHIUycegw2TQd9aIc_gtCAbeww",
		"distance_in_meter": 1852.4789910909503,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_9357ddc4feb3de5096d8c87ff90e096c_1683216673",
		"lat": 26.1639755,
		"lng": 91.7680221,
		"token": "em99sPtDS5m7dYc6RkIGMU:APA91bHxlT3XQSo7qBtNG5I3-IwQ15dPhEJoU2jVL7TWYAm4IiEGnmNaqFKfq_8AGETASw1BR2dn1QZRMFa6snHdV_ljW4x16K5Gy_hxp9nAoK5zXdPx7W6rYHCnIUvAQrI_IifxVDaj",
		"distance_in_meter": 1818.1525966044346,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_6dec681fceaa5793fca57e321b82785e_1677598636",
		"lat": 26.18885,
		"lng": 91.7575367,
		"token": "ckiatAs-TB2_IzS3PBXvF9:APA91bH3zItbdDw5x4tfRtdFxrxEtms_JlpHOFp1-lYKudnxpBIC1sJcPPtoe1vW7bHvr3v8e-xqfXFmmoBZ2hmOXpnOGonZWqcvk2YRIGwEMW0jRSsNW4zujZkJhrYZSri10wEBRhqV",
		"distance_in_meter": 1804.69563131227,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_97ec3ca9d61b304628fafa60a30fc416_1680098632",
		"lat": 26.1889497,
		"lng": 91.7561218,
		"token": "dzyf4uNiSqaqycwd39TCdC:APA91bHlVfvxmZpt8cONQVC-SWAbrHyosAM7a_25rcPByRjIucpXoJE4QNzj6TcKZ-p345yen3MsK8MPkjDocTCzuAnuQz0csCGSMTMLr_yon5rdCtrARjDBim9Yj006FeYRjmscNurI",
		"distance_in_meter": 1784.8614746540688,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_c926d56909d814690fa416cbfea7d131_1686453371",
		"lat": 26.1688089,
		"lng": 91.7699485,
		"token": "dneYQmOCQQy5G37qZbLDw6:APA91bF7vhLRdsqMwdF24B3DFOJQt72wblFj3A5_E-DDFHlPz42Mor8mgtcC43Aq-Tw31ZdqfJI6uJnwEoo2YfIswFGdGxIN_z4wc5VZx0xZ2Lv_PS5EK6fhp3zEf7Cuku9pfbgN9yGe",
		"distance_in_meter": 1765.00441993266,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_8ea790609ba06712ea89574978feadcd_1677386579",
		"lat": 26.1887067,
		"lng": 91.7543239,
		"token": "f2JclYKmSlGhK4bAyLT-TM:APA91bGS0lfilk97n4G9ygMdaO3R6hZhkX-DZfsIo4b90I7SHAdSF2acgxPQ8WkP9guiLW7MSOKynx23l8Ii9Vjc0RP0YvTrByFAu_PP68VQMR_iJ1vCS5VLB59Gl9hDEvkuRA9AU9g-",
		"distance_in_meter": 1734.7386045888613,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_f034c399f6e86deda31979c2db0e92cb_1684557527",
		"lat": 26.1887117,
		"lng": 91.7541287,
		"token": "e7spTIEFROOHCFkthNbWvC:APA91bFf07npwEsHJDZRn01DsLosLJzEwoylKR0AiyEXKSHAX5x2XjWfc64qxfQOds4nW89_F0NbqKU8zqDNUCthWd8mAFyjWn_M0ZX5R41r6vYjN2Pn30kOq0Z4dmrssJ1qpkP0OPnm",
		"distance_in_meter": 1733.831422075499,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_e74118a6e7697e972d15178f64869f40_1677338988",
		"lat": 26.1884641,
		"lng": 91.7540067,
		"token": "d3njXiaZQ0KvivHvGv2zBH:APA91bGFtANA8hYtUQQ1WQSmYw8DOELjPyD9V9iyXBDZMgscwjRoBPhXDr_hFOnV5mPJQCuJ0Vo42h9bd-Y69XJHEiwD7NJYiJMIzun8vNiBipn1zGkp53Ud_MNrgemoRodPwZfVzJ3z",
		"distance_in_meter": 1705.5722553923858,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ecf31a3c5e5c1eef0708692e2f1bcbb3_1689226271",
		"lat": 26.1747332,
		"lng": 91.7697435,
		"token": "fWRFoXnURiSephjZGG7aCl:APA91bF_EGPhX33YtJqvhhamAhhb48gXSIwLDQzlD9GtmMy4O8f0rFzqmR1NI5jdZuq4TvfWrcH0Nl7u7UZkkHz03_umEzKy8BNu_-2-zFOhnHiSEtFer0tkeAPYDc_zfZpOfDH2gdeg",
		"distance_in_meter": 1686.7925740733758,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_43554a70874e8c56ce496e45a6588074_1686272079",
		"lat": 26.1882217,
		"lng": 91.751935,
		"token": "fct7IKyiQ2ynti54S1fE9v:APA91bFMWem_29CmJgcG1rMU_Y42ppE6mXU7pxL48cSEhXam3ZC2XJmpKo74Oz09z5_ofEEN86tGAXoxwvFK0Zub3_5Ds1kTnpA3i3Q82TJZUq_rb2AEYNPXlGK_2JmfZ8ti8RllGtKI",
		"distance_in_meter": 1678.0793821391248,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_1736c5989ce90f81f3c2ba0e0590855e_1680792982",
		"lat": 26.175721,
		"lng": 91.7693496,
		"token": "fEph7RAiRlKYiSKKD6zhrc:APA91bGJq7ruYBixMmTIeMIPrtcLFJfhoDACm2mezFc6C10jEvdMI1yE4N6prWHBzgdgjhnsZXTukk-8TdSFdELTA21CHEqTG5E0ja6K-mIl-YdDNnxP9N7JoM6uBhsv1goeb3p71con",
		"distance_in_meter": 1663.073248162131,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_3f3e3ab5e7ef70ceff0fab19e4920136_1683791231",
		"lat": 26.1875028,
		"lng": 91.7486468,
		"token": "ds0hM6inQX2GU1lzcSYIWe:APA91bGVeqcrkGEPYojUXyu6efHwr2cin65oAqr2XhgT2e-Vj8zm7p_TV1de5f135n4ChQCFFyfBmnKs6rar5s9-qm4X7n0H21sLQoZ4ImHLw4Yy1LyefCxOU0aFgt5hji0ZQioKv3J-",
		"distance_in_meter": 1651.2680802160273,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ca23132c70caf321707d95d4b777a3e2_1680848452",
		"lat": 26.1866505,
		"lng": 91.7464213,
		"token": "dMEVdAuXTLWNbXzJjP5rNP:APA91bGhkza1Q9DMAvXIdcTEXXfFSAhIa9yWYxfFNFy1qSBrYe54ALTI26WuLBeTMf2U6LagthdXzIVtKyheIuOKvtBFO3_3m4j79OBShvCucLo-WKXkdQwyRi3a2MRd64yt1XVlIa-u",
		"distance_in_meter": 1634.5992624331518,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_808e1881aae8d7afec08eb1fb4e4db9b_1689599915",
		"lat": 26.166975,
		"lng": 91.7677083,
		"token": "dz9x5nWJQOS6uqLv1CYqPm:APA91bGySO-MSotBNMxTSSZ3844Rfv1gKOptGxMMktGxWRA6U_ICviOQjSB83x5voxeGtCUrvQRfE7jsEzjM0THXIfuCbKT2eldnfGULe6Ir2rh-EC4blxuVWbTeXv0aMzcg_2HSA3sH",
		"distance_in_meter": 1626.1568720124424,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ba44123f242fb8c58be8d47ff266cf7f_1688527204",
		"lat": 26.1876833,
		"lng": 91.7519067,
		"token": "dySvuvDfQem-Jc5fjc0yXn:APA91bGaL8cw4biLyybsoQWChFYlBsSWey4hsYdBZWVQ7eBJpIPG3dsisiJoXghhSm3axVroRmi_foCP_totU_iJncy6aXzhWzw-9dzdtaeb9gw2VAzFMqO4uHimkknTDgd8jmx4oWjh",
		"distance_in_meter": 1618.5375391779928,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_a50d11b049a86d8c2dc83a414a9b305a_1677329933",
		"lat": 26.1681033,
		"lng": 91.7681083,
		"token": "flLnLR9jS3adCrUa8YHm3a:APA91bHvYXYKL_uUUoSz2Rc9Y4HhK2vSnAMiOaj2-Pyh6-hsAvXPL5toCRJwRdFUrQjblTw2JQ_oppIZo57_1GskJV2zUuo944ovpBGlh0maGYZWAYkkSK4W5gi55bh8njFcggTRG1Td",
		"distance_in_meter": 1614.7567740025488,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_18448df006674792532d40c36b0670b3_1686326884",
		"lat": 26.1629503,
		"lng": 91.7414584,
		"token": "duzQlt07RSylksirBpsKVi:APA91bGlDL_a8iUuBTtE9VrSmX1aMVR-MLQqfOCIIbCL63RSDzLwSkkcSw3TU3uAgamCKeiv2W3NnsyCHP-TM4ocu_bOuTqqJYOaTmZNrW1vaTCWv1uA-Hingo4DLDnh2EiNemSU1Kah",
		"distance_in_meter": 1609.2101512225972,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_65b65b990041205289ac30a40ea15df0_1679019049",
		"lat": 26.1587797,
		"lng": 91.7518304,
		"token": "fMVz8snoQrCaIwx4A_-Phe:APA91bEalYBpsaA0hJJ0QwKOrlFgQC1FzU1WL-EW9JZ9v-mwCSg4aUVvS-3inG9JgObb0gx1xNHVdYT0mX64rfYACv20TkCMIbwOo8uN89QueA-Cw8dj3e2a55WHMwGDROogvluCEb1A",
		"distance_in_meter": 1599.8345610545432,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_f8a1dd126a1246e6582ebd29a4efb820_1683857577",
		"lat": 26.1821237,
		"lng": 91.7405826,
		"token": "fPSeQ9yXSnafIMQ9EhzTH0:APA91bFSoXl17gOLuiQanDdfbjCqqq58-KN7bH2y6O6s8MhAT1ISvheg31zQYsmiD0xWdU5uVIxkBzkvzhXVkjcHfwwxvd4F4uKHeK3hhP2zOLt_-cD2gZ-viEN5kXqb6FFDb64XzdXN",
		"distance_in_meter": 1583.9918638274703,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_edb87de56adfa9ae4e215ba474f2404e_1678686982",
		"lat": 26.1871147,
		"lng": 91.7555046,
		"token": "f7FAHiy4ROWcJoAaZEw9lg:APA91bGlb1ZJ2okgCJhKw_NY7Kyr9k4v8GZ8yLwDgd-m7MV33ApYn6PLnmnpdP53-gQpkRerOt4ihoBWiLmlDLJzdU1ZTQ-iCuQCNAKvz7k9Fgexl8nn9idZCXU7A-gnHTlE4MO2O0IT",
		"distance_in_meter": 1573.4372029701128,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_b60111830b74f928e9ae80f2a3eadd22_1680989154",
		"lat": 26.1870447,
		"lng": 91.7549027,
		"token": "f_YloQ_9StOOj0qq8QwTKi:APA91bEEKQLfigg_2_W3o4tioFJ8JccTlUYinbEG4NltyzUPN4mxOOJrauWme6ywFovo70dU-LZHnOcE7PXrNY9Tmy_t3e8hoJqDH9iYzY_SqYb8RzC-5nrq9tZC6fDxhdThZljChQuQ",
		"distance_in_meter": 1557.014138919503,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_62c66d06ccb5173c61cd1428d5e725cb_1678525430",
		"lat": 26.1866474,
		"lng": 91.749034,
		"token": "caa-FQjJQ3edBpAx2HvJOs:APA91bFD7sW5VeNYgl-LdupiHxyLKzrAhTqyFFQhtJ5XGn5wX4wWjjXIXVnnhJ600ZU6YjhD0CIi27vqUwD8hzEUAJ1b78Hi_rK4fXhztumikQ3KKnNCkGLOR6ZK-fTD57yvTNUKiNPo",
		"distance_in_meter": 1549.531058475263,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_0c6db5f4d8f2e3c16bc6c81b3a6f590c_1680953903",
		"lat": 26.18658,
		"lng": 91.7488933,
		"token": "dT1pK0ihTzqG0h_fJitxUy:APA91bEUB8bzuTo1-rtvzaAz9BrI47Bx7ud96fA-W497YCtNwOwSFUCqHOiH4eoPqFrU7FVvwdHtQzgpi_LMF9hD3Wb33hDIMTJkxFL_mnSm3TxBIBShfOI0FLlMX6cl4qKVBL4rFKSe",
		"distance_in_meter": 1545.8669005338338,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_31c0ce8e81010d19851b43cea075da37_1679314993",
		"lat": 26.1865404,
		"lng": 91.7490558,
		"token": "cDXSSvRiS9SPrThgVDHzgS:APA91bE66O6y7JrfQWCYAvHMD52BwJrPXQDxoQOQ6lq9pnCcg76NCTgMPjKgMde1SaPpnJ_8_Gm-dD31RdCCq_iXxLMBl04TtH0TWo56jEZzogFvG6zioaVKWS_xfK6qADOT-TfoLku2",
		"distance_in_meter": 1537.4765869897624,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_a0aeb2f5223a8b30173f5ca818744e22_1682072565",
		"lat": 26.1863946,
		"lng": 91.7570853,
		"token": "fUoNJ2LeQcCay39NXdzScF:APA91bFrHRC31VZgqpfR3qDbAh-BdX1fHvGDSFtnB9Op7mKA7dwKCgVaC23kRUlY9TFnznSzaIUyIhAHX6efZX_K0wkwTzJv-X1oRscgCb733sQfEgYTOctCmZIzerb78xjd0gyJFO3X",
		"distance_in_meter": 1529.637784127207,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_099c93dbf04a0ec6b1d8e284271ea3f2_1683866782",
		"lat": 26.1863583,
		"lng": 91.7487717,
		"token": "fgaEFzZHTyiDspcBsEV-xy:APA91bH_7qrnoRXcRz1A2ee4tidlddFYivNX-N9nlZ6pJtHQ89NWGyahC3oZJ_c8Ue_cwHEHXTVijHvDr7vtsQnONV0hJkYH_9J0SpskAqDaIyTdVBc4gUoCDMHXVUOME26qo0CngFrv",
		"distance_in_meter": 1525.337137050981,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_f6b03fbed3e30bf2be10070cec4277b4_1689156155",
		"lat": 26.160857,
		"lng": 91.7596974,
		"token": "eAN8PmDoSG-TOvTT4wZeCQ:APA91bETaK-Kiw2-6PVHjcdN_GHxTRyBBb9Je8upQgm0aiWGm2n2yoTG7JtMpLz0hlvAH0g6Ilr3zVdjLVW9ztfsPcubrmB8QKGHePp4Yo_pDCe9g6JA9e4dBO3XugpOVKm41LLhWeuh",
		"distance_in_meter": 1523.4026033763798,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_d7137fbd2be9914a50ff11b0c1658300_1679214000",
		"lat": 26.1856017,
		"lng": 91.74664,
		"token": "doXJrDeKSZKBILageoSKqT:APA91bFOrgG2usuay864nZwRI7AXAz84zUgB7McCdE-tZqbHC_V76N4jxUeFxzq7_bouUWWBuCr2C7NrYinxG1CA9cO7K3rjmDH5zMG_LgvmcuRD1osP2ml5r5im09GrCnz2GktaG1-o",
		"distance_in_meter": 1519.1962061586632,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_d67daf1e68e41e8929403212a136aaa6_1680605926",
		"lat": 26.1862217,
		"lng": 91.75714,
		"token": "c2epIq-PQHS7WWi7Ov9f7z:APA91bEsZyBL5lazGYFRnQhDPaP_i6C6foQQgI7o-MkL9aK_esStb39w7yluShpLCgjiJLDRLGP1QtCFiCh0R7OUoA_yConbe9G3YLdNhiPwM6aafnJLcCLxmMJReo-6uYtQgKkWq8HD",
		"distance_in_meter": 1512.6652834360057,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_8a36d33db2cedc75e2c97e719ef8ad95_1680168899",
		"lat": 26.1862985,
		"lng": 91.74901,
		"token": "eOclSBJQRyGQWbZYFGdKh2:APA91bF3xnKaQgrtXjhBJkcU0OB-WT5SNAd-kGitiF6izNqRP5VfVL1RADJd14bZfAQ4aHmnCqIXzTkfBvbZYcGWU4NGSKNtHUtr4hUBG_E16a08l9xo6UAhDNSoVzYY0AOtmZQYTRBO",
		"distance_in_meter": 1512.6430072487437,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_018462241ae5b00c02e4018d3fe3fc40_1681007727",
		"lat": 26.1863141,
		"lng": 91.7491063,
		"token": "clfALkyiQ7m1XtLh4Z2a2g:APA91bH4QVKFVh_3_pHaZbFn_M4L0ouAE-WzZjsgOcdj02vCoAMWTihLv7Mr9yg8fmewIwDQvx6DyoFikFBkKDo9zl8psw3rFOu0TsdwUMDTUq-iaJM_oBy0SMxdJyQvFReswkrb0xp3",
		"distance_in_meter": 1511.8733039333617,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_c2d396eb9385a989933cc0ceb67431b1_1683185657",
		"lat": 26.1861745,
		"lng": 91.7571602,
		"token": "cmjRQfScSNiZ1Dl_it3GW9:APA91bEmgRj-dRUZu6DA8lgAVI9bu-dI8bTJhTIbyKIm57w12R48JUNDN0mzUCf5YIx_i1XToEB83AtQ-wAbqn7iXjEItja5ipnOHqUp3c78-6iVTLU_UOAW6yKIhd-bOnErjKJW8MX4",
		"distance_in_meter": 1508.1918660445742,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_5f79095f4eb5abbfe07cd86651e1f7ff_1682048854",
		"lat": 26.1710867,
		"lng": 91.7676383,
		"token": "dDzQ_e2PQNuzNbvgXQtBSV:APA91bGP_bU3AmWxyDoMyJo6SoA61WD6V9GmDfLYk7IIpxRW-M_k0AnwzCtVGLgU8ztMkHINH2jmJnm3j_G0YnALq0sjlurcKAWnzPY4vdRpD3ZvppcdkxqKGEiD5Zr0CrpJmAXUllwJ",
		"distance_in_meter": 1485.3195731663382,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_c5acd8b574930d220a808abe1a0de152_1677739189",
		"lat": 26.185785,
		"lng": 91.757055,
		"token": "eMQRifpOQ1eYB_LuLeC8fz:APA91bEqxmPFItT69nhdVAGBZGYAh8MQ4NaAxs13e8eshPgl1uPHnDcZyJk4I3eazIut49AGYZ9CSb9H6uWS1Y2RvQweKq74LKWaQTycvwl0x6pkp77bQyRa-gKb4HTk_0-pu8qGzXVe",
		"distance_in_meter": 1463.7099932273834,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_0703adb4a8d5113ec1d55ac8b5de166d_1680859617",
		"lat": 26.1851438,
		"lng": 91.7587942,
		"token": "cHDCHALISS-7aZ9BNA-R3U:APA91bH7vLI2Qg6vN2-esJ8lTByy4gaGuSjmWYHO3I-MR9ysCETCN4-mIfyCxXyNH__aRqDGoLA5KtrxSGZOnJ9hqFHmYyBvFSEPyUeX-82GqSKRUoDCX278kPUst41e2RCika-Do_KT",
		"distance_in_meter": 1456.186147143806,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_5ab51f0f8afea687496c517fd4125f0f_1684472989",
		"lat": 26.1612797,
		"lng": 91.7467914,
		"token": "dHfmZpLaRB6Mmiw3pnQsnw:APA91bFmhf1Uag3aV3w9G0esytDCUhsOjnjU9A8dUmfjX2qnJxyJt_en2yyKxPxExrqjS1UiYTJbHqAeo7wcmrxIVIYEmwY9kGEBClUECFTyo6Hy1-H4QEYbiUP4CmGwzBs0wsDkE9Sx",
		"distance_in_meter": 1453.1500018454453,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_e20310243bfd5f8eb0580e10e5c756dd_1677579402",
		"lat": 26.1859197,
		"lng": 91.749969,
		"token": "dP7GGn0DR0i9ml9J1FgmbB:APA91bFRZt2IsN9lxpqfQLEBVTyoqXLHYU1lmQ8mNotuH7u_39v--dJrtOtyXO-rGnGcT8Vj4ACXiLUxnFHmtcZVk4wZcceTsuDar7kSfCmgI8VdlRNknggDwoa19Bm6I22wE6T1nFoR",
		"distance_in_meter": 1449.6179857499592,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_2773a8e6acb2dd38f28cf1a2cf918536_1683627651",
		"lat": 26.1763924,
		"lng": 91.73901,
		"token": "eB6H1ox1TW6U5WidyuBgFr:APA91bEJFhoXHqc3rzxMfUSekqtxXndOcx35fgQbpgdmaQHK-mwdeGiyIXnBJ1r4Siyf4g2-lHCyp0vvkUm36rgyO1LsOIyZvfFPwn1As5hdjXETT0T3oPpxCrh9OWz_gHmshFQpcMSC",
		"distance_in_meter": 1433.3206127078881,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_bc600882c4d55958e1de5eeb693b807c_1681100634",
		"lat": 26.1851333,
		"lng": 91.7580369,
		"token": "dELpe6FHQMu5Y3Tz3UdsvX:APA91bFXSQ30UFIsWqRXyDXeXRvGGzpG37IM2TiIgIFpsxFkYQXqD-Yl7qFyV__Vm9vnXxfp4xdEop1XoJqwka0Ist9zxSp62m497wKu4SxS6PIEs0YfT5nzcMBfjDs1dtSmNF8Phvcv",
		"distance_in_meter": 1426.3985210452981,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_50502ac75220d71b898dc724b632154d_1681141885",
		"lat": 26.1603967,
		"lng": 91.7528533,
		"token": "czNf0UDgSZmvSMGHN6BWuR:APA91bEldHWewHkfu32Bwq1SNz8__jo_mSbJyWsjo6OJ2sgX_Kidub8yoC0_NRUIMgKX0dJn87kCZS14UWRq1-lGljouSBv1bdp_tVgcx96sO8b3xhWs89FO0DPnPwzb8DSMEEc64ygV",
		"distance_in_meter": 1416.4848152875209,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_2cab94fad8cb098b3e4f3ee0202042a2_1677143631",
		"lat": 26.1842688,
		"lng": 91.7467681,
		"token": "fvI00vbVRmiUKKeYLKRUC1:APA91bFlkLkCCweTNR--Ts6rJAvvrvTjd6nwtYkN86xrTBLp_Ik82GLXIO7_Lve-u0sGjFd8mfLv8EnOOMt-bWMsin2xRPB9HL-UCCzQUN-ue_GMP0lGBhBcgFUETgFP3FlbGhZlyDE6",
		"distance_in_meter": 1379.8864464706955,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_f3b30d7e74454dcdd3222900f2b80fb2_1689417449",
		"lat": 26.185115,
		"lng": 91.75527,
		"token": "fpUQptGLSxSM_IvVkUWdLO:APA91bHwFgRHYN9cCuay0AdHHmZCcurOWmDhU8419Qo-ytox4Dta8xdZ53XxzZsyt33BCE4AFo8wn-QMKW05077WMxDfXB1kSpXM4TV_RmpCfNBJCEImSt6SBW6CnFwehYAQcXOxIXOH",
		"distance_in_meter": 1350.482293381431,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_cba4b47f8bd4010fc651a2b29f9fd5ea_1681044191",
		"lat": 26.1837027,
		"lng": 91.7469012,
		"token": "cNK0M1-AQoyzv1MPwyGoj3:APA91bFiCbbdlVXok-N4HtYzhUw9nr1jyS_HvYeFmgPnD_rDwprlH9k0Cfzec6yNskIuoVQfTNAr9evB_CM3xkJ4VsEkyJ7j3gPqp1CrOL9BDMycDMJ8genSjELSHZirGlZBKllWCRd6",
		"distance_in_meter": 1317.7426839015488,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_edd90102ffc80fa737a3b8b30bec1bac_1683888501",
		"lat": 26.1636803,
		"lng": 91.745574,
		"token": "fcKYQkJSSDWc_ljaEX7SQn:APA91bFsCexeQXis6Lckn43yLlanyO4AYflFVKeWpfT6wcaQumIn7TfBhsBnc67zF8OoFBsLxJO8tjNio0_3SyIjMh2P4hyOWL1kUvhoeBmUnGtec5olYBE_zAUJ8WrZZFSNNPhT8L1-",
		"distance_in_meter": 1281.6502125679744,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_74d3a22547583f4b8631ebf5cb3740fd_1678596834",
		"lat": 26.1720721,
		"lng": 91.7401463,
		"token": "dhm41gStRiqb5J15nrut6p:APA91bF8VsbU1L4feHYoBk3WAMpuBWdWtorv4cWoD9cwnBrJxa-VdOcvpP0SbXJnqeykptNrtYyD0rvn0K3uEyqkLEzqlIX0IztrKZMSKYumDUYkkO_HX8xwqFN4o9yRhuE6p8qpdWuI",
		"distance_in_meter": 1279.4136842084454,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_935349c5da9ca5eb9efd42df2e9386b5_1680943105",
		"lat": 26.1671819,
		"lng": 91.7638719,
		"token": "cpbC4UbDSQGM0e1krwkgon:APA91bHZ4-I9Z2FSQdrKOvjWmaii8xDYZwTxjp6peWZ7nuEK4lyyFe3MZ-d_34QqQTBiNVMteTLBuRnmyG0B1wA9gUms18RBYs5r88Vdj4KvA16BED-ApnAVFWjn5aWOlErIxGjaxY2S",
		"distance_in_meter": 1277.3060083468265,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_a84fc57446636fda6eaf2b86f6474890_1677391612",
		"lat": 26.1717981,
		"lng": 91.7403221,
		"token": "fwdy09dBTs2b3TxXIADyFT:APA91bHH_44UMWgBvXMukzxvEG1U2xEAjpP29OfCVX7wp8oT0AOxAN2RBvz3FfWsCKYnH8jZxguiMaeZI-mB7zH9TSqSo6pn47x4_4n9xuOs5P7XYy1Z1mocus_vsAyz6gfFuChWiT5G",
		"distance_in_meter": 1265.199301710677,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_d8be0c4718ae688f9f7de11ea27729c5_1680936537",
		"lat": 26.1640477,
		"lng": 91.7604253,
		"token": "cdB9qDwOQAq6rLab9iiep9:APA91bGt0HQLSaEcvkuRd64USg1bSyX9kn8DkwF6AJrLI4naK8tEd7aDC7YMMkBT8auoikP6LWL4kCMWeYRv-8WyizrUjLK7RURpha21kZCrmoUNQEuaUUxlw-_-6966HNRCPWKlHl03",
		"distance_in_meter": 1257.6699648635347,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_2458cf5f85283c0953f637264b6aba60_1681013399",
		"lat": 26.1672106,
		"lng": 91.7636334,
		"token": "fVmyu3EAT56w0AL3AFK7Hu:APA91bHajtrdt-4mHvlgg7EGwL0hHyYOeHA6DzSmeN44sJ44wQrcGOq8PgK77FPLQbU7ZfYl0WOi-JR1Ny4S8LRhDM_xAjcu_TjwHa9C9NsG3mC2SK1ooAEohY-VZm_6g-eJh_BEbsaP",
		"distance_in_meter": 1255.3556057602361,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_cec506f4d681c0d7792a31df62eff842_1683186015",
		"lat": 26.1672359,
		"lng": 91.7633838,
		"token": "fEhDL32xT9SmL0A5v8C56h:APA91bGu0uQuVSAx3_5PwNFUJhEgP9Pi9O7Pgr52YCbPUCaYUVP7JMjb79NP2NyW84zv0aho1LHWVJ7rBJltBG1VolWl2Xc7Y6Zo5YUjX9rzPZE4D0m3cnif08IGhFGDIcEMT_JpSqmV",
		"distance_in_meter": 1232.7454353208273,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ed305ab6aa21f6ceac2215db70aa2f10_1680685800",
		"lat": 26.1832971,
		"lng": 91.7482899,
		"token": "cCwvP2oNQnelaZza4uH4AV:APA91bG_EWqnxv5pv_eG_lg0lqg7XUuv97LpHFTWtA44JR9-Er4ehpAM_JArNVXfE7IKPOmpUJYIf7SEAECrz_kfNsXTTdmHwW0Ocw2bL2wiXDa-rTzZPul2NmmqpMaQljTQk4SYMQIu",
		"distance_in_meter": 1218.8814585198288,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_d8cf4e99bca3231eb1a90c026e1f047e_1679221665",
		"lat": 26.1630139,
		"lng": 91.7572639,
		"token": "cEk8iTDoTrqN8PZmi-jUg1:APA91bEHzYzH-rPN6Aob_3VWtpkeT1NtbK1bK1dtbIzoLkguETCa9V3GC2d13XZ8YEJaj-Q7tiKMes3Wa4VfFa_OgUvuyqJeFK79qpaTQC0MURlM8b0Py_WWsAeE4pEflYeE45f75RT6",
		"distance_in_meter": 1206.108449746193,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_cd5f4063484d841eff6b13a518c2fb04_1690363926",
		"lat": 26.1639812,
		"lng": 91.7464958,
		"token": "fxYiNSEtQKetSJfAA03rXe:APA91bGJaxFM_svK8u_DTLVnmQ6wQ1QwxdrjaCdlwcExCMZWN9Zj7Br084pgXHa2420e7n1stK5U1qe7obZYerBn_rkQPx3ZLBLFbZKFpIhmvm69EipMH0CYMnklziyfcEIDxXcGDQDZ",
		"distance_in_meter": 1202.9932321057202,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_5358c6ea1bc4ad1dcb4772364b4a958b_1680628270",
		"lat": 26.1830233,
		"lng": 91.7482833,
		"token": "dYk3CN-ZSdSc5Pj8fEBsM1:APA91bGRNt0wBKqt-5ZMltR1H29FyWULufuGwrWlO1JJe88ekHB5G65gF_EHYPaR7Wu1vVRlU_H8rNTGJ1EEWYGHxPXGrf6J_oTodxqOHs5eOdKgZvLtEdD6qzvFVHZk7glzmfb_HEsu",
		"distance_in_meter": 1191.0382181808095,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_06df46403407fefd62f7f8f82a1ce50f_1677214683",
		"lat": 26.1830166,
		"lng": 91.7482676,
		"token": "d8kakqJuScK2529MtpZ7zj:APA91bFcXe4vPFqozEWKIefqzSUh7ucm8GF4kFEkkyF6u1QtLU5Z_R5SjiKClDpspN86grhIt5Ik5E7Nv6Ooq5vgdktsAml7_odELSSjvlZGbV3lCkww_fWd8btTXmSn1knm3Je0N_mt",
		"distance_in_meter": 1190.9612983418374,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_7325da114a436a427d8b26d3083ad277_1680948194",
		"lat": 26.1704843,
		"lng": 91.7635329,
		"token": "d45kSGX0QxS3ZmSFjuWNwj:APA91bFea4I9g8WAu2V7U3Bk_0QqU3aKEo61og8cIkDegmFpWPasg2_UI_YlisH4Duy__ET5N2-yzsyNz8oH8Bsejhz5oAe3zIrb4661pOwQy2KtA0nGOhdeWRMlzXrrhYoS79-jDK_q",
		"distance_in_meter": 1098.7417204320877,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_a58fc4e94336fb8fadd4ef9eae6b21a7_1683870216",
		"lat": 26.1809289,
		"lng": 91.7500738,
		"token": "e1zE0HSoQkKMS3ha_2MgKI:APA91bE3ure924OrwxfnLGprjw61NFpnATjWoD8JiUJwBRuTlzz8CaTqOmE2cJ6g-A5kXrJYc0vUw6e3bq12r2Pm2Inr5kTO_kZEFWb6klWR1EU4BZdiAAdOikD4qv9kKoRvEVXVWLLg",
		"distance_in_meter": 910.2885121373756,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ee4803612c4cbcd31bc1de7d87535be2_1688107973",
		"lat": 26.1712266,
		"lng": 91.7617375,
		"token": "e0PtNPF5SKayUP_hbE-I6Q:APA91bFpXhNMB__KlA7Y1OV-bz3TDCP-iMoAkOtBJvxuTir4tKY1tRP6FMwkIfyaIGohWvEgCKloUTUoOrKt3vHXwmywLCs7BR-aaL371fxQR0qcG9Kr0Ye4ewvqb7SeaKAyTjDobaiS",
		"distance_in_meter": 904.6586273099177,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_11db3eb53308369516e9eafcb359c88e_1681320655",
		"lat": 26.1768583,
		"lng": 91.745535,
		"token": "dpFSQVl1SrusfrOTNH0463:APA91bHDwlZ9mDZlwRBgd4SJvJdizK3rv8vkQioHREcf8ImbaDbkay3pTceTzLw7rlZQ0Z1FhMPjMNMxGFUlTX-2bu4AFVrKbN89QAJIxTNCycaGH9QD3ltoNHfc-epi0J2vM9SpsNvZ",
		"distance_in_meter": 844.1941321270192,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_14e22da8bd2a9d9fd2a63244420c6fe8_1680925177",
		"lat": 26.1802275,
		"lng": 91.7527883,
		"token": "dazT35QCRs6HuSDsi7dpUD:APA91bGj5L0rSpESBtCqJ6isS4Xi2SB1MwswVFMhH_q2RK3jpz7ssu-Ax6nbGUGswYg58tHUBVN9MGTFLfvxDmxDVe9T9F5NvKTCS9xJ5Gr2pjnDndT0Qpa39Bx1IGHnTD0gEp8c6K6D",
		"distance_in_meter": 787.0642332426644,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_b262dc6a737cc5ab413e35b55c6b492c_1681110937",
		"lat": 26.17235,
		"lng": 91.7599317,
		"token": "cYLyYWIFT_2djzrdGetQn_:APA91bFAu88oggnN_xfhl8U9muiWf3A1W8UJupynpT6gY48hvBzkQpue7rypcT_ePYSefseqoUTg5mrXQzTVtaTJ7UWVOJBUkydxSimFwm4LNgtAyRcwJEH0cbPswAJ726zgbDNzgpmo",
		"distance_in_meter": 704.676207196298,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_a554c4cc30bba6be1df63bc9ac984c93_1680973479",
		"lat": 26.1670194,
		"lng": 91.7523874,
		"token": "cbq2kIqnQGWuVGO8042Q4h:APA91bGv0sv5Crw96i0A__PF1SBgUo2DQA3RdNGm_dwEVQOevEgDb7vrPUbJlTKuPRowgTPjApol2b_1-4mGsDQvRwk-SxxpNnu_ACsx29R7ZDmLeDeRO0Bic3IKqbqlocJbvB10C7wl",
		"distance_in_meter": 682.6882271070905,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_1d5db93ac2d5965d7eefedb9c3407902_1686646343",
		"lat": 26.1786974,
		"lng": 91.7505328,
		"token": "eGxB5Y2TQ1S8ltq4W2jfUE:APA91bE8YzdjT7aMkCMmdE3okBddl5urI7yF1EvTyWTwQPP0-wKOeJ85kTSDr7ArzJ7bqYaiEL43wWWKQpAyyt-jIse38q5UeN15LYgrMs6M8j4fNhnvPDBbFQl09eaixi2kcG6mkyAv",
		"distance_in_meter": 661.3023105195857,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_dc69322a985539c10ab3d08b6d700e23_1679894780",
		"lat": 26.1672616,
		"lng": 91.7524763,
		"token": "ckp40deHRDSTJ8SXuY1Ty0:APA91bGR9KZKSbtNARB2rcUQM_UCg8oZvM4ddM9Qrno3g3aaYQcT2twGHVI08pZROxKU3kDp74MwEmZ1nUQX-sey4mDBoDR59lZit9mh1_0XZuBlzx8b5FtlMN8s2XdmqL1iX8Oa0mpb",
		"distance_in_meter": 655.2029487132689,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_c3708e8c481952fd86ffa9d27376db7c_1690205662",
		"lat": 26.1784254,
		"lng": 91.7505606,
		"token": "cKKEZgbbTBy5uljkv9_MSZ:APA91bG1vg8BBHldbmgiqeCDzeGaIc7P8nGGkX4WI0wjs1W-b0CD4rWrTuu13TnlemXRj0T_OvqszgJ9jS9B-v2yIgkMbo0VYxl_beE4bnEcQEzSuBRTbuYvpkrskb_H8cjJtSEtT1Ei",
		"distance_in_meter": 632.1636187080974,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ab4fc13d68b05a23ca9fae49234e7988_1677339473",
		"lat": 26.1742912,
		"lng": 91.7584487,
		"token": "fxWSHWwOT7GZjK1-7BohsL:APA91bFvSq_kWDrNvk8x2pSe1b2co0qSyYGPDZmc2oXSSx-qP3Lwd_1UFHMwjls7yK4T_ROZDeaaLUwgi0p3GeHAXpC95GY3mWv5EhUrt6TjECgbZuyBfpUmplyevFEPxpVLqxhwr-0O",
		"distance_in_meter": 565.7592901534478,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_74952b05947bb95ea50106bdb16fcf17_1684151269",
		"lat": 26.1681199,
		"lng": 91.7523337,
		"token": "fOeokt1jROiAM1zgrHXcnO:APA91bFRv-6uxSoe63ZJPXajEvje1gyB1hKan9qcDFyLPv6ffXyvLZi98dp06jHfQrxDTjVRvdii9HtqsRlI7B9pnq2vE0NEp1HbzsohnZOo6VtnGoW4ORDyTFeyCK74019yyIIEGc_t",
		"distance_in_meter": 561.3961135887895,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_5f48c45d759c2432a795d6bac6524af6_1684988454",
		"lat": 26.1778367,
		"lng": 91.7545967,
		"token": "c03wQZPiSbOH9WoalBtBRU:APA91bHPQZ0p-uek_FIYShskpRXPEgflz9jj4ixYLCV47J-xscyik6spFZcDdSnMVjnljrdce8jYs5QcvsEr60EL7QD93U5x232pfzFytyw5x6Sbj5lqQp79EDO7xayiECMGx8mF5p-k",
		"distance_in_meter": 547.4418901461406,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_f29b42fdcb0a9da5581ea352d234a3de_1677338148",
		"lat": 26.174615,
		"lng": 91.7578133,
		"token": "dmcAIDHRTzqI45ebAQgc_s:APA91bE9Dn8ExcIYJvsgPbeFp1aV_icAgAO2qjOis9aG3PJFZZG7Oqrs6ESfLrVuJAV1uc5MGnrtIgaDHCdvTPAD7NypGzaTmh1ZR3FFj5N4ZDjcrmhgOP-KRGj9kB8Bhn8bJt74ZOF5",
		"distance_in_meter": 514.493264121562,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_b15b8b55087e91ae2892c179f4896700_1680765077",
		"lat": 26.1722824,
		"lng": 91.7585266,
		"token": "f-wKOGPORwubL11guc2v-z:APA91bEt6Ik9kpEPwDisf0UvBBkoOmUBdv1cSN6NPEEEQoT4jDAN-xFQrZW92XnNRl-kf0pz3NiUM_sd35QYvcDfK_KBtrg7NvojDghnWmdU1nBf2ZdrmSLFnqAcGnVnD5EZ0TTIslxi",
		"distance_in_meter": 494.94416434022645,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_d8b5b9e03011cb96e3784c14e7941b94_1682798489",
		"lat": 26.1766418,
		"lng": 91.7550955,
		"token": "coaU4AMzSTitT_oP8KzUCf:APA91bE8cTb2dwV3bNIuuBYTRtwikGsrUlWaAHMBsy4KL9w6aY7Dz_vHqcDVEbhuQX998q-NqV3zCo9mRPzKTGY7umMFrNB37JPIounV7DGYB8XjcNqVV7nNyjHZB1bkh1cc5Bk_vdNa",
		"distance_in_meter": 444.9649659124531,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_0ce4799ca6b731d23ee89217a06de8aa_1684209791",
		"lat": 26.1764982,
		"lng": 91.7553353,
		"token": "fyDRp74aTKy1XXUSWrl8Zx:APA91bGHx-_NfbS2spjjl6VqkkRb1TBrlF0yG-GKhad5xIs-RM43ncAEsWssjUBe4BavERQuyud7jH2HUhnr-M6st8zVSMX1I6YpJlTujyqaBUDrHI1Zv8hsmKWGgelRxuYYR65jzTv6",
		"distance_in_meter": 443.6132945306585,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_d995024c62b2e40874f912255d06d525_1676880579",
		"lat": 26.1723521,
		"lng": 91.7486783,
		"token": "ciX-XT2nSnOKXPJfV3XJIb:APA91bEhGCZTMhQH5dEtOIdXQq0cBL0nW-VGaRuW5oRchHKqDAMFH20b1Mp8JAASV5lsD8V-s44jqhc0uCJ-wAJzHIlkOruwm6CnUDsvVNRcGhb4mPlej8r7yR0VTl4w1CiHusASW4CD",
		"distance_in_meter": 432.1257493341929,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_948cd57f535060c5c2c070664fbad285_1681132989",
		"lat": 26.1730374,
		"lng": 91.7569974,
		"token": "dfbc08UhS_6gz6qwP33Tsa:APA91bHDxzFALCZQcOSNMnOkOy_pHMf7zC53VWYdYJsr7hDGwOKzE0KdHwRHG60m91shKP8s93hO7H9MFptUFUBtC6X3GrLHsqeXn-vcA4bnxVnwIIlui_7dc1FZ8-65OyGzPst9LBqO",
		"distance_in_meter": 406.690918339749,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_eb7710b38aeb2dcb395c57d4217a5775_1691294435",
		"lat": 26.1711406,
		"lng": 91.7556457,
		"token": "cT6JBvOORKihGF37rCgRJd:APA91bGJ0ttuL-6y1h7RyVEjjdSS5Y7mLzGgGRa0firAw0I7k9-WA5YQsc3SqZYernz8a6fRTvJ07658h7m8TeXVVGi9JLvv-bspGYBsB_diSKzae5-2azNQ5ogUry08VyZiyiXfaxo3",
		"distance_in_meter": 351.3279624346239,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_74455ccbd1260a59a406d00211c48262_1686762577",
		"lat": 26.176118,
		"lng": 91.7532279,
		"token": "fUX-ll6xTrmo96xTBjte5o:APA91bE545OqBP0RrnMC5F8Ku5g490HannfTbqlWDztZ8Wee1OE_dJEzfibZIveXUM_L2sBXXvDWptgjTrA1FIIzjZnSDgqFrM0GVHx88iMCufepXXyXPCRyPp2Pwau8vOdEMiHm1Ucp",
		"distance_in_meter": 331.75899933944373,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_7b5a09c64a562c58620a08eaedb566d0_1680192732",
		"lat": 26.174715,
		"lng": 91.7502917,
		"token": "f_8MgttQQburos3LXXTBgm:APA91bHcoEhJ9ZOF5JfFOPBtWz-vOGJIDMFxLuP4cKseHDxSaf7atst-_cq788t31BXCQaJwcUWnoq-tY07Njp9WXYGgDgMiS2CkNahS2NBU-LhKMgB0_p-81Ori8-ZN7AtcdrWIhpwM",
		"distance_in_meter": 314.90471354782187,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_3e965c76995e00107d204d366aae0644_1678787254",
		"lat": 26.1749566,
		"lng": 91.7525993,
		"token": "dxfdtUNIQ3mug3AgHIshBU:APA91bEUDy3RsmSO_s3iDYmzr1K-ujzKsolIW5BmeO6VSAcFsyfYRyWohxJ0FJqFpluTrwFZCYHZ33ykGcL_FbNPsv64lT1jLsPOE9wfAVSjYhufgAZoYX0P7R9c0zRDKZLfOLhARnm3",
		"distance_in_meter": 203.83423482732502,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_df1caa06d65bd4f62d50e6cd14148f53_1680372497",
		"lat": 26.174741,
		"lng": 91.7538102,
		"token": "fWHvkQlxSBWAJ8WzCaIqcP:APA91bG9hj9psPHPgSs2CfQ-N2KA2mrppYwS6JxyIhrif8abS8ZWnLVteQ5SnyAwFcLAB1pzGmX08WtjPCM6PrIEQGpV4LcfOQCoRVPdQ6WeIohYXaNCOpsecisf3DnLkXg6nwP_Dttx",
		"distance_in_meter": 198.2844962683991,
		"serviceTypeId": "SERVICE_CAR"
	},
	{
		"id": "DRIVER_ddc5edfe3097aea73f6366729338b1e5_1684493551",
		"lat": 26.1728639,
		"lng": 91.7541597,
		"token": "f2cH7WihSRKh_prj0ZbCeK:APA91bEDILuM1luFQQfNK_PS3E8UPTk7oSWCNskceFXdebrXtsnglNL5aMJL2ZslYdaFvSEi8tPrnvVONcDDAc0f5IIX5Z7rK9GxcNqPh259oSdbRczlGvw5abtaWeZaz5wpIoy7GBa9",
		"distance_in_meter": 127.42934986500701,
		"serviceTypeId": "SERVICE_CAR"
	}
]

nearByDrivers.forEach((item, index) => {
	driverData[`'${item.id}'`] = [item.lat, item.lng]
})

app.get('/', (req, res) => {
    console.log(req.query);
    let driverId = req.query.driver_id
    let lat = req.query.lat
    let lng = req.query.lng

    driverData[driverId] = [lat, lng]
    res.status(200).json(true);
})

app.get('/getAllDrivers', (req, res) => {
    res.status(200).json(driverData)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});