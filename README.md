# BitcoinAnalyzer
This a tool to analyze Bitcoin's market value for a given date range.

The application gives the following information for the given date range.

A. How many days is the longest bearish (downward) trend within a given date range?
● Definition of a downward trend shall be: “Price of day N is lower than price of day N-1”
● Expected output: The maximum amount of days bitcoin’s price was decreasing in a row.
Example: In bitcoin’s historical data from CoinGecko, the price decreased 2 days in a row for the
inputs from 2020-01-19 and to 2020-01-21, and the price decreased for 8 days in a row for the
inputs from 2020-03-01 and to 2021-08-01.
B. Which date within a given date range had the highest trading volume?
● Expected output: The date with the highest trading volume and the volume on that day in
euros.
C. Scrooge has access to Gyro Gearloose’s newest invention, a time machine. Scrooge
wants to use the time machine to profit from bitcoin. The application should be able to tell
for a given date range, the best day for buying bitcoin, and the best day for selling the
bought bitcoin to maximize profits. If the price only decreases in the date range, your
output should indicate that one should not buy (nor sell) bitcoin on any of the days. You
don't have to consider any side effects of time travel or how Scrooge's massive purchases
would affect the price history.
● Expected output: A pair of days: The day to buy and the day to sell. In the case when one
should neither buy nor sell, return an indicative output of your choice.

Use CoinGecko’s public API to get the needed data
https://www.coingecko.com/en/api/documentation
You will only need to use the /coins/{id}/market_chart/range endpoint. Read its
documentation to understand how it works. Note that the API returns data with different granularity
depending on the date range's length. Tip: You should add 1 hour to the `to` input to make sure
that you always get data for the end date as well. Scrooge’s Money Bin only holds euros, so that is
the only fiat currency you need to consider.
For example, the following URL can be used to fetch bitcoin’s price, market cap and volume information
in euros (€) from January 1, 2020 to December 31, 2020:
https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_c
urrency=eur&from=1577836800&to=1609376400

Additional information:
● Both start and end dates should be included in a date range.
● A day’s price means the price at 00:00 UTC time (use price data from as close to midnight as
possible as the day’s price, if you don’t have a datapoint from exactly midnight).
● Allow the user of your application to pass the start and end dates of the date range in some way,
e.g. via input fields in a UI or as parameters to an API.
