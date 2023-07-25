import requests
import json
import string
url = "https://skinport.com/api/browse/730"

payload = {}
headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0',
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate, br',
  'Referer': 'https://skinport.com/market',
  'DNT': '1',
  'Connection': 'keep-alive',
  'Cookie': 'i18n=en; scid=eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiQTE5MktXIn0.MsqAVdMI1Irr8So0HUAxD-AG53IT7W0CZI1TKUiLWXPFooe8iIxEBw.DSI_IiV3iwNXZgXD0mmlsw.PrrhhBwSJv4cE79mjMj1671dXk8rYuCZldd_v2IhjWhEWyNiSwbqyOCg5OQKKRZpvW63zexAsJk0eVRj4mHYRiREg1xGFAo2LDQfT6W6yo_UgpPHD2NCN4Tx3TDoj-RHEfRGby8YF1pO26I548V0k_KGTwDWRWjR8lA7xN5z5v5M82K2R7kQfg6DqraoYPBQssgSBUphXl5H-Y-bPFxhfYTWvwhja2ghSRC8xB-9JbTl4D6BrtA9yVneOGRCDhDBk8bIGS3dPt4VKSSe03UnwlAdDQXfciK1njunXu2MX2CxvJEYFmSYUMDUH3MXNl9HMqgiTZzVNsssBkKfEQV61_hif0tva0eTpb6wjMsB_oViIUqgU8lhiN4iieNmfNAV9QfbLealc_MekTO3HzTUxwHggipXKM6yWcxQ5wibfHrj3w2VjMIKq1XW5OKiRKzFupmTWxykNWNMA8Lj2arvqcBFLqiM83hgM7gmr88zLiCUsCLsvK0tgpX8k6ZyQ7DndFzNR7TnZCKZhK16sPzUSkh9rqiMSM7dzJIkn9RgtUZHR4KpDduaUjcaA_2YOD7d6l2X6I5RiPsuy1kUAc4OIVM-m2ksk5yZir7JRbnI9UzWajE-Avmq7XW5GDO0yyLf.FjBJuYDr06vrt_ygviLOtg; _ga_JQVJ6LN9T1=GS1.2.1689970190.34.1.1689970198.52.0.0; _ga=GA1.2.1319651322.1686120714; connect.sid=s^%^3A3gNF1qbcdaKWqGyrv3zB4xLTzGX36y29.pjDvaPkzlxC92jLB^%^2F^%^2BumlSnKv6EccvoLB8NkWYc1PsA; _csrf=mBLcrxGp48ayG70upCMHAP5h; cf_clearance=zH3qtA1GwONXuEclmM8t39XDw9hRwUrDzbGD32BJN9g-1689970189-0-0.2.1689970189; __cf_bm=0btHBYsZvJdeINI5jjTShhc0Afull7Ggnncs0wWo46w-1689970189-0-AesBAKneCVY+FzU0HT+iaiwTxM1N2HFdc0VVhB1lKhixdy+CU/ARHlAZKAFPquK/j5rCybtaOlSiIyM4BEpOBsM=; _uetsid=d737d8d027f411eebb2a5d740b811d5a; _uetvid=108caff0de2b11ed82e71bd50e44c4cf',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'If-None-Match': 'W/1a993-mzpfVncmVWwk6jKvLjj2xhrV59M',
  'TE': 'trailers'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response)