(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-datnek-select-country', ['exports', '@angular/core', '@angular/common/http', '@angular/common', '@angular/forms'], factory) :
    (global = global || self, factory(global['ng-datnek-select-country'] = {}, global.ng.core, global.ng.common.http, global.ng.common, global.ng.forms));
}(this, (function (exports, i0, i1, common, forms) { 'use strict';

    var Country = /** @class */ (function () {
        // tslint:disable-next-line:variable-name
        function Country(code, name, phone_code) {
            this.code = code;
            this.name = name;
            this.phone_code = phone_code;
        }
        return Country;
    }());

    var NgDatnekCountrySelectService = /** @class */ (function () {
        function NgDatnekCountrySelectService(http) {
            this.http = http;
            // this.url = '/assets/data/country.json';
            this.url = 'https://fastdiscarry.be/assets/data/country.json';
        }
        // tslint:disable-next-line:typedef
        NgDatnekCountrySelectService.prototype.getCountry = function () {
            return this.http.get(this.url);
        };
        NgDatnekCountrySelectService.prototype.getData = function () {
            return [
                {
                    name: 'Afghanistan',
                    code: 'AF',
                    phone_code: '+93'
                },
                {
                    name: 'Albania',
                    code: 'AL',
                    phone_code: '+355'
                },
                {
                    name: 'Algeria',
                    code: 'DZ',
                    phone_code: '+213'
                },
                {
                    name: 'American Samoa',
                    code: 'AS',
                    phone_code: '+1'
                },
                {
                    name: 'Andorra',
                    code: 'AD',
                    phone_code: '+376'
                },
                {
                    name: 'Angola',
                    code: 'AO',
                    phone_code: '+244'
                },
                {
                    name: 'Anguilla',
                    code: 'AI',
                    phone_code: '+1'
                },
                {
                    name: 'Antigua',
                    code: 'AG',
                    phone_code: '+1'
                },
                {
                    name: 'Argentina',
                    code: 'AR',
                    phone_code: '+54'
                },
                {
                    name: 'Armenia',
                    code: 'AM',
                    phone_code: '+374'
                },
                {
                    name: 'Aruba',
                    code: 'AW',
                    phone_code: '+297'
                },
                {
                    name: 'Australia',
                    code: 'AU',
                    phone_code: '+61'
                },
                {
                    name: 'Austria',
                    code: 'AI',
                    phone_code: '+43'
                },
                {
                    name: 'Azerbaijan',
                    code: 'AZ',
                    phone_code: '+994'
                },
                {
                    name: 'Bahrain',
                    code: 'BH',
                    phone_code: '+973'
                },
                {
                    name: 'Bangladesh',
                    code: 'BD',
                    phone_code: '+880'
                },
                {
                    name: 'Barbados',
                    code: 'BB',
                    phone_code: '+1'
                },
                {
                    name: 'Belarus',
                    code: 'BY',
                    phone_code: '+375'
                },
                {
                    name: 'Belgium',
                    code: 'BE',
                    phone_code: '+32'
                },
                {
                    name: 'Belize',
                    code: 'BZ',
                    phone_code: '+501'
                },
                {
                    name: 'Benin',
                    code: 'BJ',
                    phone_code: '+229'
                },
                {
                    name: 'Bermuda',
                    code: 'BM',
                    phone_code: '+1'
                },
                {
                    name: 'Bhutan',
                    code: 'BT',
                    phone_code: '+975'
                },
                {
                    name: 'Bolivia',
                    code: 'BO',
                    phone_code: '+591'
                },
                {
                    name: 'Bosnia and Herzegovina',
                    code: 'BA',
                    phone_code: '+387'
                },
                {
                    name: 'Botswana',
                    code: 'BW',
                    phone_code: '+267'
                },
                {
                    name: 'Brazil',
                    code: 'BR',
                    phone_code: '+55'
                },
                {
                    name: 'British Indian Ocean Territory',
                    code: 'IO',
                    phone_code: '+246'
                },
                {
                    name: 'British Virgin Islands',
                    code: 'VG',
                    phone_code: '+1'
                },
                {
                    name: 'Brunei',
                    code: 'BN',
                    phone_code: '+673'
                },
                {
                    name: 'Bulgaria',
                    code: 'BG',
                    phone_code: '+359'
                },
                {
                    name: 'Burkina Faso',
                    code: 'BF',
                    phone_code: '+226'
                },
                {
                    name: 'Burma Myanmar',
                    code: 'MM',
                    phone_code: '+95'
                },
                {
                    name: 'Burundi',
                    code: 'BI',
                    phone_code: '+257'
                },
                {
                    name: 'Cambodia',
                    code: 'KH',
                    phone_code: '+855'
                },
                {
                    name: 'Cameroon',
                    code: 'CM',
                    phone_code: '+237'
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    phone_code: '+1'
                },
                {
                    name: 'Cape Verde',
                    code: 'CV',
                    phone_code: '+238'
                },
                {
                    name: 'Cayman Islands',
                    code: 'KY',
                    phone_code: '+1'
                },
                {
                    name: 'Central African Republic',
                    code: 'CF',
                    phone_code: '+236'
                },
                {
                    name: 'Chad',
                    code: 'ID',
                    phone_code: '+235'
                },
                {
                    name: 'Chile',
                    code: 'CL',
                    phone_code: '+56'
                },
                {
                    name: 'China',
                    code: 'CN',
                    phone_code: '+86'
                },
                {
                    name: 'Colombia',
                    code: 'CO',
                    phone_code: '+57'
                },
                {
                    name: 'Comoros',
                    code: 'KM',
                    phone_code: '+269'
                },
                {
                    name: 'Cook Islands',
                    code: 'CK',
                    phone_code: '+682'
                },
                {
                    name: 'Costa Rica',
                    code: 'CR',
                    phone_code: '+506'
                },
                {
                    name: 'Côte dIvoire',
                    code: 'CI',
                    phone_code: '+225'
                },
                {
                    name: 'Croatia',
                    code: 'HR',
                    phone_code: '+385'
                },
                {
                    name: 'Cuba',
                    code: 'CU',
                    phone_code: '+53'
                },
                {
                    name: 'Cyprus',
                    code: 'CY',
                    phone_code: '+357'
                },
                {
                    name: 'Czech Republic',
                    code: 'CZ',
                    phone_code: '+420'
                },
                {
                    name: 'Democratic Republic of Congo',
                    code: 'CD',
                    phone_code: '+243'
                },
                {
                    name: 'Denmark',
                    code: 'DK',
                    phone_code: '+45'
                },
                {
                    name: 'Djibouti',
                    code: 'DJ',
                    phone_code: '+253'
                },
                {
                    name: 'Dominica',
                    code: 'DM',
                    phone_code: '+1'
                },
                {
                    name: 'Dominican Republic',
                    code: 'DO',
                    phone_code: '+1'
                },
                {
                    name: 'Ecuador',
                    code: 'EC',
                    phone_code: '+593'
                },
                {
                    name: 'Egypt',
                    code: 'EG',
                    phone_code: '+20'
                },
                {
                    name: 'El Salvador',
                    code: 'SV',
                    phone_code: '+503'
                },
                {
                    name: 'Equatorial Guinea',
                    code: 'GQ',
                    phone_code: '+240'
                },
                {
                    name: 'Eritrea',
                    code: 'ER',
                    phone_code: '+291'
                },
                {
                    name: 'Estonia',
                    code: 'EE',
                    phone_code: '+372'
                },
                {
                    name: 'Ethiopia',
                    code: 'ET',
                    phone_code: '+251'
                },
                {
                    name: 'Falkland Islands',
                    code: 'FK',
                    phone_code: '+500'
                },
                {
                    name: 'Faroe Islands',
                    code: 'FO',
                    phone_code: '+298'
                },
                {
                    name: 'Federated States of Micronesia',
                    code: 'FM',
                    phone_code: '+691'
                },
                {
                    name: 'Fiji',
                    code: 'FJ',
                    phone_code: '+679'
                },
                {
                    name: 'Finland',
                    code: 'FI',
                    phone_code: '+358'
                },
                {
                    name: 'France',
                    code: 'FR',
                    phone_code: '+33'
                },
                {
                    name: 'French Guiana',
                    code: 'GF',
                    phone_code: '+594'
                },
                {
                    name: 'French Polynesia',
                    code: 'PF',
                    phone_code: '+689'
                },
                {
                    name: 'Gabon',
                    code: 'GA',
                    phone_code: '+241'
                },
                {
                    name: 'Georgia',
                    code: 'GE',
                    phone_code: '+995'
                },
                {
                    name: 'Germany',
                    code: 'DE',
                    phone_code: '+49'
                },
                {
                    name: 'Ghana',
                    code: 'GH',
                    phone_code: '+233'
                },
                {
                    name: 'Gibraltar',
                    code: 'GI',
                    phone_code: '+350'
                },
                {
                    name: 'Greece',
                    code: 'GR',
                    phone_code: '+30'
                },
                {
                    name: 'Greenland',
                    code: 'GL',
                    phone_code: '+299'
                },
                {
                    name: 'Grenada',
                    code: 'GD',
                    phone_code: '+1'
                },
                {
                    name: 'Guadeloupe',
                    code: 'GP',
                    phone_code: '+590'
                },
                {
                    name: 'Guam',
                    code: 'GU',
                    phone_code: '+1'
                },
                {
                    name: 'Guatemala',
                    code: 'GT',
                    phone_code: '+502'
                },
                {
                    name: 'Guinea',
                    code: 'GN',
                    phone_code: '+224'
                },
                {
                    name: 'Guinea-Bissau',
                    code: 'GW',
                    phone_code: '+245'
                },
                {
                    name: 'Guyana',
                    code: 'GY',
                    phone_code: '+592'
                },
                {
                    name: 'Haiti',
                    code: 'HT',
                    phone_code: '+509'
                },
                {
                    name: 'Honduras',
                    code: 'HN',
                    phone_code: '+504'
                },
                {
                    name: 'Hong Kong',
                    code: 'HK',
                    phone_code: '+852'
                },
                {
                    name: 'Hungary',
                    code: 'HU',
                    phone_code: '+36'
                },
                {
                    name: 'Iceland',
                    code: 'IS',
                    phone_code: '+354'
                },
                {
                    name: 'India',
                    code: 'IN',
                    phone_code: '+91'
                },
                {
                    name: 'Indonesia',
                    code: 'ID',
                    phone_code: '+62'
                },
                {
                    name: 'Iran',
                    code: 'IR',
                    phone_code: '+98'
                },
                {
                    name: 'Iraq',
                    code: 'IQ',
                    phone_code: '+964'
                },
                {
                    name: 'Ireland',
                    code: 'IE',
                    phone_code: '+353'
                },
                {
                    name: 'Israel',
                    code: 'IL',
                    phone_code: '+972'
                },
                {
                    name: 'Italy',
                    code: 'IT',
                    phone_code: '+39'
                },
                {
                    name: 'Jamaica',
                    code: 'JM',
                    phone_code: '+1'
                },
                {
                    name: 'Japan',
                    code: 'JP',
                    phone_code: '+81'
                },
                {
                    name: 'Jordan',
                    code: 'JO',
                    phone_code: '+962'
                },
                {
                    name: 'Kazakhstan',
                    code: 'KZ',
                    phone_code: '+7'
                },
                {
                    name: 'Kenya',
                    code: 'KE',
                    phone_code: '+254'
                },
                {
                    name: 'Kiribati',
                    code: 'KI',
                    phone_code: '+686'
                },
                {
                    name: 'Kosovo',
                    code: 'XK',
                    phone_code: '+383'
                },
                {
                    name: 'Kuwait',
                    code: 'KW',
                    phone_code: '+965'
                },
                {
                    name: 'Kyrgyzstan',
                    code: 'KG',
                    phone_code: '+996'
                },
                {
                    name: 'Laos',
                    code: 'LA',
                    phone_code: '+856'
                },
                {
                    name: 'Latvia',
                    code: 'LV',
                    phone_code: '+371'
                },
                {
                    name: 'Lebanon',
                    code: 'LB',
                    phone_code: '+961'
                },
                {
                    name: 'Lesotho',
                    code: 'LS',
                    phone_code: '+266'
                },
                {
                    name: 'Liberia',
                    code: 'LR',
                    phone_code: '+231'
                },
                {
                    name: 'Libya',
                    code: 'LY',
                    phone_code: '+218'
                },
                {
                    name: 'Liechtenstein',
                    code: 'LI',
                    phone_code: '+423'
                },
                {
                    name: 'Lithuania',
                    code: 'LT',
                    phone_code: '+370'
                },
                {
                    name: 'Luxembourg',
                    code: 'LU',
                    phone_code: '+352'
                },
                {
                    name: 'Macau',
                    code: 'MO',
                    phone_code: '+853'
                },
                {
                    name: 'Macedonia',
                    code: 'MK',
                    phone_code: '+389'
                },
                {
                    name: 'Madagascar',
                    code: 'MG',
                    phone_code: '+261'
                },
                {
                    name: 'Malawi',
                    code: 'MW',
                    phone_code: '+265'
                },
                {
                    name: 'Malaysia',
                    code: 'MY',
                    phone_code: '+60'
                },
                {
                    name: 'Maldives',
                    code: 'MV',
                    phone_code: '+960'
                },
                {
                    name: 'Mali',
                    code: 'ML',
                    phone_code: '+223'
                },
                {
                    name: 'Malta',
                    code: 'MT',
                    phone_code: '+356'
                },
                {
                    name: 'Marshall Islands',
                    code: 'MH',
                    phone_code: '+692'
                },
                {
                    name: 'Martinique',
                    code: 'MQ',
                    phone_code: '+596'
                },
                {
                    name: 'Mauritania',
                    code: 'MR',
                    phone_code: '+222'
                },
                {
                    name: 'Mauritius',
                    code: 'MU',
                    phone_code: '+230'
                },
                {
                    name: 'Mayotte',
                    code: 'YT',
                    phone_code: '+262'
                },
                {
                    name: 'Mexico',
                    code: 'MX',
                    phone_code: '+52'
                },
                {
                    name: 'Moldova',
                    code: 'MD',
                    phone_code: '+373'
                },
                {
                    name: 'Monaco',
                    code: 'MC',
                    phone_code: '+377'
                },
                {
                    name: 'Mongolia',
                    code: 'MN',
                    phone_code: '+976'
                },
                {
                    name: 'Montenegro',
                    code: 'ME',
                    phone_code: '+382'
                },
                {
                    name: 'Montserrat',
                    code: 'MS',
                    phone_code: '+1'
                },
                {
                    name: 'Morocco',
                    code: 'MA',
                    phone_code: '+212'
                },
                {
                    name: 'Mozambique',
                    code: 'MZ',
                    phone_code: '+258'
                },
                {
                    name: 'Namibia',
                    code: 'NA',
                    phone_code: '+264'
                },
                {
                    name: 'Nauru',
                    code: 'NR',
                    phone_code: '+674'
                },
                {
                    name: 'Nepal',
                    code: 'NP',
                    phone_code: '+977'
                },
                {
                    name: 'Netherlands',
                    code: 'NL',
                    phone_code: '+31'
                },
                {
                    name: 'Netherlands Antilles',
                    code: 'AN',
                    phone_code: '+599'
                },
                {
                    name: 'New Caledonia',
                    code: 'NC',
                    phone_code: '+687'
                },
                {
                    name: 'New Zealand',
                    code: 'NZ',
                    phone_code: '+64'
                },
                {
                    name: 'Nicaragua',
                    code: 'NI',
                    phone_code: '+505'
                },
                {
                    name: 'Niger',
                    code: 'NE',
                    phone_code: '+227'
                },
                {
                    name: 'Nigeria',
                    code: 'NG',
                    phone_code: '+234'
                },
                {
                    name: 'Niue',
                    code: 'NU',
                    phone_code: '+683'
                },
                {
                    name: 'Norfolk Island',
                    code: 'NF',
                    phone_code: '+672'
                },
                {
                    name: 'North Korea',
                    code: 'KP',
                    phone_code: '+850'
                },
                {
                    name: 'Northern Mariana Islands',
                    code: 'MP',
                    phone_code: '+1'
                },
                {
                    name: 'Norway',
                    code: 'NO',
                    phone_code: '+47'
                },
                {
                    name: 'Oman',
                    code: 'OM',
                    phone_code: '+968'
                },
                {
                    name: 'Pakistan',
                    code: 'PK',
                    phone_code: '+92'
                },
                {
                    name: 'Palau',
                    code: 'PW',
                    phone_code: '+680'
                },
                {
                    name: 'Palestine',
                    code: 'PS',
                    phone_code: '+970'
                },
                {
                    name: 'Panama',
                    code: 'PA',
                    phone_code: '+507'
                },
                {
                    name: 'Papua New Guinea',
                    code: 'PG',
                    phone_code: '+675'
                },
                {
                    name: 'Paraguay',
                    code: 'PY',
                    phone_code: '+595'
                },
                {
                    name: 'Peru',
                    code: 'PE',
                    phone_code: '+51'
                },
                {
                    name: 'Philippines',
                    code: 'PH',
                    phone_code: '+63'
                },
                {
                    name: 'Poland',
                    code: 'PL',
                    phone_code: '+48'
                },
                {
                    name: 'Portugal',
                    code: 'PT',
                    phone_code: '+351'
                },
                {
                    name: 'Puerto Rico',
                    code: 'PR',
                    phone_code: '+1'
                },
                {
                    name: 'Qatar',
                    code: 'QA',
                    phone_code: '+974'
                },
                {
                    name: 'Republic of the Congo',
                    code: 'CG',
                    phone_code: '+242'
                },
                {
                    name: 'Réunion',
                    code: 'RE',
                    phone_code: '+262'
                },
                {
                    name: 'Romania',
                    code: 'RO',
                    phone_code: '+40'
                },
                {
                    name: 'Russia',
                    code: 'RU',
                    phone_code: '+7'
                },
                {
                    name: 'Rwanda',
                    code: 'RW',
                    phone_code: '+250'
                },
                {
                    name: 'Saint Barthélemy',
                    code: 'BL',
                    phone_code: '+590'
                },
                {
                    name: 'Saint Helena',
                    code: 'SH',
                    phone_code: '+290'
                },
                {
                    name: 'Saint Kitts and Nevis',
                    code: 'KN',
                    phone_code: '+1'
                },
                {
                    name: 'Saint Martin',
                    code: 'MF',
                    phone_code: '+590'
                },
                {
                    name: 'Saint Pierre and Miquelon',
                    code: 'PM',
                    phone_code: '+508'
                },
                {
                    name: 'Saint Vincent and the Grenadines',
                    code: 'VC',
                    phone_code: '+1'
                },
                {
                    name: 'Samoa',
                    code: 'WS',
                    phone_code: '+685'
                },
                {
                    name: 'San Marino',
                    code: 'SM',
                    phone_code: '+378'
                },
                {
                    name: 'São Tomé and Príncipe',
                    code: 'ST',
                    phone_code: '+239'
                },
                {
                    name: 'Saudi Arabia',
                    code: 'SA',
                    phone_code: '+966'
                },
                {
                    name: 'Senegal',
                    code: 'SN',
                    phone_code: '+221'
                },
                {
                    name: 'Serbia',
                    code: 'RS',
                    phone_code: '+381'
                },
                {
                    name: 'Seychelles',
                    code: 'SC',
                    phone_code: '+248'
                },
                {
                    name: 'Sierra Leone',
                    code: 'SL',
                    phone_code: '+232'
                },
                {
                    name: 'Singapore',
                    code: 'SG',
                    phone_code: '+65'
                },
                {
                    name: 'Slovakia',
                    code: 'SK',
                    phone_code: '+421'
                },
                {
                    name: 'Slovenia',
                    code: 'SI',
                    phone_code: '+386'
                },
                {
                    name: 'Solomon Islands',
                    code: 'SB',
                    phone_code: '+677'
                },
                {
                    name: 'Somalia',
                    code: 'SO',
                    phone_code: '+252'
                },
                {
                    name: 'South Africa',
                    code: 'ZA',
                    phone_code: '+27'
                },
                {
                    name: 'South Korea',
                    code: 'KR',
                    phone_code: '+82'
                },
                {
                    name: 'Spain',
                    code: 'ES',
                    phone_code: '+34'
                },
                {
                    name: 'Sri Lanka',
                    code: 'LK',
                    phone_code: '+94'
                },
                {
                    name: 'St. Lucia',
                    code: 'LC',
                    phone_code: '+1'
                },
                {
                    name: 'Sudan',
                    code: 'SD',
                    phone_code: '+249'
                },
                {
                    name: 'Suriname',
                    code: 'SR',
                    phone_code: '+597'
                },
                {
                    name: 'Swaziland',
                    code: 'SZ',
                    phone_code: '+268'
                },
                {
                    name: 'Sweden',
                    code: 'SE',
                    phone_code: '+46'
                },
                {
                    name: 'Switzerland',
                    code: 'CH',
                    phone_code: '+41'
                },
                {
                    name: 'Syria',
                    code: 'SY',
                    phone_code: '+963'
                },
                {
                    name: 'Taiwan',
                    code: 'TW',
                    phone_code: '+886'
                },
                {
                    name: 'Tajikistan',
                    code: 'TJ',
                    phone_code: '+992'
                },
                {
                    name: 'Tanzania',
                    code: 'TZ',
                    phone_code: '+255'
                },
                {
                    name: 'Thailand',
                    code: 'TH',
                    phone_code: '+66'
                },
                {
                    name: 'The Bahamas',
                    code: 'BS',
                    phone_code: '+1'
                },
                {
                    name: 'The Gambia',
                    code: 'GM',
                    phone_code: '+220'
                },
                {
                    name: 'Timor-Leste',
                    code: 'TL',
                    phone_code: '+670'
                },
                {
                    name: 'Togo',
                    code: 'TG',
                    phone_code: '+228'
                },
                {
                    name: 'Tokelau',
                    code: 'TK',
                    phone_code: '+690'
                },
                {
                    name: 'Tonga',
                    code: 'TO',
                    phone_code: '+676'
                },
                {
                    name: 'Trinidad and Tobago',
                    code: 'TT',
                    phone_code: '+1'
                },
                {
                    name: 'Tunisia',
                    code: 'TN',
                    phone_code: '+216'
                },
                {
                    name: 'Turkey',
                    code: 'TR',
                    phone_code: '+90'
                },
                {
                    name: 'Turkmenistan',
                    code: 'TM',
                    phone_code: '+993'
                },
                {
                    name: 'Turks and Caicos Islands',
                    code: 'TC',
                    phone_code: '+1'
                },
                {
                    name: 'Tuvalu',
                    code: 'TV',
                    phone_code: '+688'
                },
                {
                    name: 'Uganda',
                    code: 'UG',
                    phone_code: '+256'
                },
                {
                    name: 'Ukraine',
                    code: 'UA',
                    phone_code: '+380'
                },
                {
                    name: 'United Arab Emirates',
                    code: 'AE',
                    phone_code: '+971'
                },
                {
                    name: 'United Kingdom',
                    code: 'GB',
                    phone_code: '+44'
                },
                {
                    name: 'United States',
                    code: 'US',
                    phone_code: '+1'
                },
                {
                    name: 'Uruguay',
                    code: 'UY',
                    phone_code: '+598'
                },
                {
                    name: 'US Virgin Islands',
                    code: 'VI',
                    phone_code: '+1'
                },
                {
                    name: 'Uzbekistan',
                    code: 'UZ',
                    phone_code: '+998'
                },
                {
                    name: 'Vanuatu',
                    code: 'VU',
                    phone_code: '+678'
                },
                {
                    name: 'Vatican City',
                    code: 'VA',
                    phone_code: '+39'
                },
                {
                    name: 'Venezuela',
                    code: 'VE',
                    phone_code: '+58'
                },
                {
                    name: 'Vietnam',
                    code: 'VN',
                    phone_code: '+84'
                },
                {
                    name: 'Wallis and Futuna',
                    code: 'WF',
                    phone_code: '+681'
                },
                {
                    name: 'Yemen',
                    code: 'YE',
                    phone_code: '+967'
                },
                {
                    name: 'Zambia',
                    code: 'ZM',
                    phone_code: '+260'
                },
                {
                    name: 'Zimbabwe',
                    code: 'ZW',
                    phone_code: '+263'
                }
            ];
        };
        return NgDatnekCountrySelectService;
    }());
    NgDatnekCountrySelectService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgDatnekCountrySelectService_Factory() { return new NgDatnekCountrySelectService(i0.ɵɵinject(i1.HttpClient)); }, token: NgDatnekCountrySelectService, providedIn: "root" });
    NgDatnekCountrySelectService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgDatnekCountrySelectService.ctorParameters = function () { return [
        { type: i1.HttpClient }
    ]; };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    // import * as $ from 'jquery';
    var NgDatnekCountrySelectComponent = /** @class */ (function () {
        function NgDatnekCountrySelectComponent(ngDatnekCountrySelectService) {
            this.ngDatnekCountrySelectService = ngDatnekCountrySelectService;
            this.countryEventEmitterChange = new i0.EventEmitter();
            this.id = 'utils-country';
        }
        NgDatnekCountrySelectComponent.prototype.ngOnInit = function () {
            // this.buildSelect2();
            this.refreshCountry();
            this.placeholder = this.placeholder ? this.placeholder : 'Select a country';
        };
        // tslint:disable-next-line:typedef
        NgDatnekCountrySelectComponent.prototype.refreshCountryAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.ngDatnekCountrySelectService.getCountry().toPromise()];
                        case 1:
                            _a.countries = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NgDatnekCountrySelectComponent.prototype.refreshCountry = function () {
            this.countries = this.ngDatnekCountrySelectService.getData();
        };
        NgDatnekCountrySelectComponent.prototype.getOption = function (country) {
            return "flag-icon  flag-icon-" + country.code.toLowerCase() + " " + country.name;
        };
        NgDatnekCountrySelectComponent.prototype.getIcon = function (country) {
            return "flag-icon  flag-icon-" + country.code.toLowerCase();
        };
        NgDatnekCountrySelectComponent.prototype.setCurrentIcon = function (value) {
            // const iconId = '#icon-' + this.id;
            this.currentCountry = this.countries.find(function (c) { return c.code === value; });
            this.icon = this.getIcon(this.currentCountry);
            this.countryEventEmitterChange.emit(this.currentCountry);
            // $(iconId).html(this.icon);
        };
        NgDatnekCountrySelectComponent.prototype.onChange = function (e) {
            var value = e.target.value;
            this.setCurrentIcon(value);
        };
        return NgDatnekCountrySelectComponent;
    }());
    NgDatnekCountrySelectComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-ng-datnek-select-country',
                    template: "<div class=\"position-relative\">\r\n  <select class=\"form-control\"\r\n          [id]=\"id\"\r\n          [(ngModel)]=\"country\"\r\n          [ngClass]=\"{'when-icon': !!currentCountry,\r\n          'is-invalid': isErrors}\"\r\n          [style]=\"style\"\r\n          (change)=\"onChange($event)\">\r\n    <option disabled selected value=\"\">\r\n      {{placeholder}}\r\n    </option>\r\n    <option [value]=\"country.code\" *ngFor=\"let country of countries\"> {{country.name}}</option>\r\n  </select>\r\n  <i class=\"icon\" [ngClass]=\"icon\"></i>\r\n</div>\r\n\r\n<!--div class=\"position-relative\">\r\n  <div [id]=\"'icon-'+id\"></div>\r\n  <select\r\n    [id]=\"id\"\r\n    [style]=\"style\"\r\n    class=\"select2 form-control\"\r\n    (change)=\"onChange($event)\"\r\n    name=\"threads-icon\"></select>\r\n</div-->\r\n",
                    styles: [".select2{background-clip:padding-box!important;border:1px solid #ced4da!important;border-radius:.25rem!important;color:#495057!important;display:block!important;font-size:1rem!important;font-weight:400!important;height:calc(1.5em + .75rem + 2px)!important;line-height:1.5!important;padding:.375rem .75rem!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;width:100%!important}.select2-container .select2-selection--single{background-color:transparent!important;border:none!important}.icon{height:15px;padding-left:33px;position:absolute;top:13px;width:20px}.when-icon{padding-left:31px}.when-icon option{padding-left:inherit}"]
                },] }
    ];
    NgDatnekCountrySelectComponent.ctorParameters = function () { return [
        { type: NgDatnekCountrySelectService }
    ]; };
    NgDatnekCountrySelectComponent.propDecorators = {
        countryEventEmitterChange: [{ type: i0.Output }],
        id: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        isErrors: [{ type: i0.Input }],
        country: [{ type: i0.Input }],
        style: [{ type: i0.Input }]
    };

    var NgDatnekCountrySelectModule = /** @class */ (function () {
        function NgDatnekCountrySelectModule() {
        }
        return NgDatnekCountrySelectModule;
    }());
    NgDatnekCountrySelectModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [NgDatnekCountrySelectComponent],
                    imports: [
                        common.CommonModule,
                        i1.HttpClientModule,
                        forms.FormsModule,
                    ],
                    exports: [NgDatnekCountrySelectComponent]
                },] }
    ];

    /*
     * Public API Surface of ng-datnek-country-select
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Country = Country;
    exports.NgDatnekCountrySelectComponent = NgDatnekCountrySelectComponent;
    exports.NgDatnekCountrySelectModule = NgDatnekCountrySelectModule;
    exports.NgDatnekCountrySelectService = NgDatnekCountrySelectService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-datnek-select-country.umd.js.map
