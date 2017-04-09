import * as selectors from '../selectors'

describe( 'currency popular selector', () => {
  const state = {
    entities: {
      banks: [
        {
          bankNameThai: 'ธนาคารไทยพาณิชย์',
          bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
          isTotal: true,
          data: [
            {
              sell: 44.40625,
              buy: 41.77375,
              acronym: 'GBP',
              fullname: 'BRITISH POUND STERLING',
              extendName: null,
              indexGroup: 0,
              index: 3,
              currencyDetails: {
                symbol: '£',
                name: 'British Pound Sterling',
                symbol_native: '£',
                decimal_digits: 2,
                rounding: 0,
                code: 'GBP',
                name_plural: 'British pounds sterling',
              },
            },
            {
              sell: 37.38125,
              buy: 36.06,
              acronym: 'EUR',
              fullname: 'EURO',
              extendName: null,
              indexGroup: 0,
              index: 4,
              currencyDetails: {
                symbol: '€',
                name: 'Euro',
                symbol_native: '€',
                decimal_digits: 2,
                rounding: 0,
                code: 'EUR',
                name_plural: 'euros',
              },
            },
          ],
        },
        {
          bankNameThai: 'ธนาคารกรุงไทย',
          bankNameEng: 'KrungThai Public Company Limited.',
          isTotal: true,
          data: [
            {
              sell: 44.40625,
              buy: 41.77375,
              acronym: 'GBP',
              fullname: 'BRITISH POUND STERLING',
              extendName: null,
              indexGroup: 0,
              index: 3,
              currencyDetails: {
                symbol: '£',
                name: 'British Pound Sterling',
                symbol_native: '£',
                decimal_digits: 2,
                rounding: 0,
                code: 'GBP',
                name_plural: 'British pounds sterling',
              },
            },
            {
              sell: '0.3158',
              buy: '0.3025',
              acronym: 'JPY',
              fullname: 'Japanese Yen',
              extendName: null,
              currencyDetails: {
                symbol: '¥',
                name: 'Japanese Yen',
                symbol_native: '￥',
                decimal_digits: 0,
                rounding: 0,
                code: 'JPY',
                name_plural: 'Japanese yen',
              },
              indexGroup: 0,
              index: 5,
            },
          ],
        },
      ],
    },
    feature: {
      currencyPopular: {
        banks: [
          {
            bankNameThai: 'ธนาคารไทยพาณิชย์',
            bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
            isTotal: true,
            data: [
              {
                sell: 44.40625,
                buy: 41.77375,
                acronym: 'GBP',
                fullname: 'BRITISH POUND STERLING',
                extendName: null,
                indexGroup: 0,
                index: 3,
                currencyDetails: {
                  symbol: '£',
                  name: 'British Pound Sterling',
                  symbol_native: '£',
                  decimal_digits: 2,
                  rounding: 0,
                  code: 'GBP',
                  name_plural: 'British pounds sterling',
                },
              },
              {
                sell: 37.38125,
                buy: 36.06,
                acronym: 'EUR',
                fullname: 'EURO',
                extendName: null,
                indexGroup: 0,
                index: 4,
                currencyDetails: {
                  symbol: '€',
                  name: 'Euro',
                  symbol_native: '€',
                  decimal_digits: 2,
                  rounding: 0,
                  code: 'EUR',
                  name_plural: 'euros',
                },
              },
            ],
          },
          {
            bankNameThai: 'ธนาคารกรุงไทย',
            bankNameEng: 'KrungThai Public Company Limited.',
            isTotal: true,
            data: [
              {
                sell: 44.40625,
                buy: 41.77375,
                acronym: 'GBP',
                fullname: 'BRITISH POUND STERLING',
                extendName: null,
                indexGroup: 0,
                index: 3,
                currencyDetails: {
                  symbol: '£',
                  name: 'British Pound Sterling',
                  symbol_native: '£',
                  decimal_digits: 2,
                  rounding: 0,
                  code: 'GBP',
                  name_plural: 'British pounds sterling',
                },
              },
              {
                sell: '0.3158',
                buy: '0.3025',
                acronym: 'JPY',
                fullname: 'Japanese Yen',
                extendName: null,
                currencyDetails: {
                  symbol: '¥',
                  name: 'Japanese Yen',
                  symbol_native: '￥',
                  decimal_digits: 0,
                  rounding: 0,
                  code: 'JPY',
                  name_plural: 'Japanese yen',
                },
                indexGroup: 0,
                index: 5,
              },
            ],
          },
        ],
      },
    },
  }

  it( 'selects bank entities', () => {
    expect( selectors.getBanks( state ) ).toEqual( [
      {
        bankNameThai: 'ธนาคารไทยพาณิชย์',
        bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
        isTotal: true,
        data: [
          {
            sell: 44.40625,
            buy: 41.77375,
            acronym: 'GBP',
            fullname: 'BRITISH POUND STERLING',
            extendName: null,
            indexGroup: 0,
            index: 3,
            currencyDetails: {
              symbol: '£',
              name: 'British Pound Sterling',
              symbol_native: '£',
              decimal_digits: 2,
              rounding: 0,
              code: 'GBP',
              name_plural: 'British pounds sterling',
            },
          },
          {
            sell: 37.38125,
            buy: 36.06,
            acronym: 'EUR',
            fullname: 'EURO',
            extendName: null,
            indexGroup: 0,
            index: 4,
            currencyDetails: {
              symbol: '€',
              name: 'Euro',
              symbol_native: '€',
              decimal_digits: 2,
              rounding: 0,
              code: 'EUR',
              name_plural: 'euros',
            },
          },
        ],
      },
      {
        bankNameThai: 'ธนาคารกรุงไทย',
        bankNameEng: 'KrungThai Public Company Limited.',
        isTotal: true,
        data: [
          {
            sell: 44.40625,
            buy: 41.77375,
            acronym: 'GBP',
            fullname: 'BRITISH POUND STERLING',
            extendName: null,
            indexGroup: 0,
            index: 3,
            currencyDetails: {
              symbol: '£',
              name: 'British Pound Sterling',
              symbol_native: '£',
              decimal_digits: 2,
              rounding: 0,
              code: 'GBP',
              name_plural: 'British pounds sterling',
            },
          },
          {
            sell: '0.3158',
            buy: '0.3025',
            acronym: 'JPY',
            fullname: 'Japanese Yen',
            extendName: null,
            currencyDetails: {
              symbol: '¥',
              name: 'Japanese Yen',
              symbol_native: '￥',
              decimal_digits: 0,
              rounding: 0,
              code: 'JPY',
              name_plural: 'Japanese yen',
            },
            indexGroup: 0,
            index: 5,
          },
        ],
      },
    ] )
  } )

  it( 'selects bank of currency popular', () => {
    expect( selectors.getBanksCurrencyPopular( state ) ).toEqual( [
      {
        bankNameThai: 'ธนาคารไทยพาณิชย์',
        bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
        isTotal: true,
        data: [
          {
            sell: 44.40625,
            buy: 41.77375,
            acronym: 'GBP',
            fullname: 'BRITISH POUND STERLING',
            extendName: null,
            indexGroup: 0,
            index: 3,
            currencyDetails: {
              symbol: '£',
              name: 'British Pound Sterling',
              symbol_native: '£',
              decimal_digits: 2,
              rounding: 0,
              code: 'GBP',
              name_plural: 'British pounds sterling',
            },
          },
          {
            sell: 37.38125,
            buy: 36.06,
            acronym: 'EUR',
            fullname: 'EURO',
            extendName: null,
            indexGroup: 0,
            index: 4,
            currencyDetails: {
              symbol: '€',
              name: 'Euro',
              symbol_native: '€',
              decimal_digits: 2,
              rounding: 0,
              code: 'EUR',
              name_plural: 'euros',
            },
          },
        ],
      },
      {
        bankNameThai: 'ธนาคารกรุงไทย',
        bankNameEng: 'KrungThai Public Company Limited.',
        isTotal: true,
        data: [
          {
            sell: 44.40625,
            buy: 41.77375,
            acronym: 'GBP',
            fullname: 'BRITISH POUND STERLING',
            extendName: null,
            indexGroup: 0,
            index: 3,
            currencyDetails: {
              symbol: '£',
              name: 'British Pound Sterling',
              symbol_native: '£',
              decimal_digits: 2,
              rounding: 0,
              code: 'GBP',
              name_plural: 'British pounds sterling',
            },
          },
          {
            sell: '0.3158',
            buy: '0.3025',
            acronym: 'JPY',
            fullname: 'Japanese Yen',
            extendName: null,
            currencyDetails: {
              symbol: '¥',
              name: 'Japanese Yen',
              symbol_native: '￥',
              decimal_digits: 0,
              rounding: 0,
              code: 'JPY',
              name_plural: 'Japanese yen',
            },
            indexGroup: 0,
            index: 5,
          },
        ],
      },
    ] )
  } )

  it( 'selects name of bank entities', () => {
    expect( selectors.getBanksName( state ) ).toEqual( [
      'The Siam Commercial Bank Public Company Limited.',
      'KrungThai Public Company Limited.',
    ] )
  } )

  it( 'selects currencies of bank entities', () => {
    expect( selectors.getBanksCurrencies( state ) ).toEqual( [
      'GBP',
      'EUR',
      'GBP',
      'JPY',
    ] )
  } )

  it( 'selects currencies (uniq) of bank entities', () => {
    expect( selectors.getBankscurrenciesUniq( state ) ).toEqual( [
      'GBP',
      'EUR',
      'JPY',
    ] )
  } )

  it( 'selects currencies (uniq) to {object} of bank entities', () => {
    expect( selectors.getBankscurrenciesUniqToObj( state ) ).toEqual( [
      { label: 'GBP', value: 'GBP' },
      { label: 'EUR', value: 'EUR' },
      { label: 'JPY', value: 'JPY' },
    ] )
  } )

  it( 'selects bank by index of bank entities', () => {
    expect( selectors.getBanksByIndex( state, 0 ) ).toEqual( {
      bankNameThai: 'ธนาคารไทยพาณิชย์',
      bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
      isTotal: true,
      data: [
        {
          sell: 44.40625,
          buy: 41.77375,
          acronym: 'GBP',
          fullname: 'BRITISH POUND STERLING',
          extendName: null,
          indexGroup: 0,
          index: 3,
          currencyDetails: {
            symbol: '£',
            name: 'British Pound Sterling',
            symbol_native: '£',
            decimal_digits: 2,
            rounding: 0,
            code: 'GBP',
            name_plural: 'British pounds sterling',
          },
        },
        {
          sell: 37.38125,
          buy: 36.06,
          acronym: 'EUR',
          fullname: 'EURO',
          extendName: null,
          indexGroup: 0,
          index: 4,
          currencyDetails: {
            symbol: '€',
            name: 'Euro',
            symbol_native: '€',
            decimal_digits: 2,
            rounding: 0,
            code: 'EUR',
            name_plural: 'euros',
          },
        },
      ],
    } )
  } )
} )
