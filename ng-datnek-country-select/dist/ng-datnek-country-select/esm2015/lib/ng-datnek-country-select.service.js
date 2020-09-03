import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgDatnekCountrySelectService {
    constructor(http) {
        this.http = http;
        // this.url = '/assets/data/country.json';
        this.url = 'https://fastdiscarry.be/assets/data/country.json';
    }
    // tslint:disable-next-line:typedef
    getCountry() {
        return this.http.get(this.url);
    }
    getData() {
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
    }
}
NgDatnekCountrySelectService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgDatnekCountrySelectService_Factory() { return new NgDatnekCountrySelectService(i0.ɵɵinject(i1.HttpClient)); }, token: NgDatnekCountrySelectService, providedIn: "root" });
NgDatnekCountrySelectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgDatnekCountrySelectService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0bmVrLWNvdW50cnktc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kYXRuZWstY291bnRyeS1zZWxlY3Qvc3JjL2xpYi9uZy1kYXRuZWstY291bnRyeS1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTWhELE1BQU0sT0FBTyw0QkFBNEI7SUFHdkMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNuQywwQ0FBMEM7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxrREFBa0QsQ0FBQztJQUNoRSxDQUFDO0lBR0QsbUNBQW1DO0lBQ25DLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU87WUFDTDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsVUFBVSxFQUFFLEtBQUs7YUFDbEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsSUFBSTtnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxJQUFJO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsSUFBSTtnQkFDVixVQUFVLEVBQUUsTUFB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ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtDb3VudHJ5fSBmcm9tICcuL2NvdW50cnkubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdEYXRuZWtDb3VudHJ5U2VsZWN0U2VydmljZSB7XHJcblxyXG4gIHVybDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAvLyB0aGlzLnVybCA9ICcvYXNzZXRzL2RhdGEvY291bnRyeS5qc29uJztcclxuICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vZmFzdGRpc2NhcnJ5LmJlL2Fzc2V0cy9kYXRhL2NvdW50cnkuanNvbic7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcclxuICBnZXRDb3VudHJ5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q291bnRyeVtdPih0aGlzLnVybCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCk6IENvdW50cnlbXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FmZ2hhbmlzdGFuJyxcclxuICAgICAgICBjb2RlOiAnQUYnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQWxiYW5pYScsXHJcbiAgICAgICAgY29kZTogJ0FMJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM1NSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdBbGdlcmlhJyxcclxuICAgICAgICBjb2RlOiAnRFonLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjEzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FtZXJpY2FuIFNhbW9hJyxcclxuICAgICAgICBjb2RlOiAnQVMnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdBbmRvcnJhJyxcclxuICAgICAgICBjb2RlOiAnQUQnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzc2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FuZ29sYScsXHJcbiAgICAgICAgY29kZTogJ0FPJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI0NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdBbmd1aWxsYScsXHJcbiAgICAgICAgY29kZTogJ0FJJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQW50aWd1YScsXHJcbiAgICAgICAgY29kZTogJ0FHJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQXJnZW50aW5hJyxcclxuICAgICAgICBjb2RlOiAnQVInLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQXJtZW5pYScsXHJcbiAgICAgICAgY29kZTogJ0FNJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM3NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdBcnViYScsXHJcbiAgICAgICAgY29kZTogJ0FXJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI5NydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdBdXN0cmFsaWEnLFxyXG4gICAgICAgIGNvZGU6ICdBVScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2MSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdBdXN0cmlhJyxcclxuICAgICAgICBjb2RlOiAnQUknLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQXplcmJhaWphbicsXHJcbiAgICAgICAgY29kZTogJ0FaJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk5NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCYWhyYWluJyxcclxuICAgICAgICBjb2RlOiAnQkgnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTczJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JhbmdsYWRlc2gnLFxyXG4gICAgICAgIGNvZGU6ICdCRCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys4ODAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQmFyYmFkb3MnLFxyXG4gICAgICAgIGNvZGU6ICdCQicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JlbGFydXMnLFxyXG4gICAgICAgIGNvZGU6ICdCWScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJyszNzUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQmVsZ2l1bScsXHJcbiAgICAgICAgY29kZTogJ0JFJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzMyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JlbGl6ZScsXHJcbiAgICAgICAgY29kZTogJ0JaJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCZW5pbicsXHJcbiAgICAgICAgY29kZTogJ0JKJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIyOSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCZXJtdWRhJyxcclxuICAgICAgICBjb2RlOiAnQk0nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCaHV0YW4nLFxyXG4gICAgICAgIGNvZGU6ICdCVCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys5NzUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQm9saXZpYScsXHJcbiAgICAgICAgY29kZTogJ0JPJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5MSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hJyxcclxuICAgICAgICBjb2RlOiAnQkEnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzg3J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JvdHN3YW5hJyxcclxuICAgICAgICBjb2RlOiAnQlcnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjY3J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JyYXppbCcsXHJcbiAgICAgICAgY29kZTogJ0JSJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU1J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXHJcbiAgICAgICAgY29kZTogJ0lPJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI0NidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCcml0aXNoIFZpcmdpbiBJc2xhbmRzJyxcclxuICAgICAgICBjb2RlOiAnVkcnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCcnVuZWknLFxyXG4gICAgICAgIGNvZGU6ICdCTicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2NzMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQnVsZ2FyaWEnLFxyXG4gICAgICAgIGNvZGU6ICdCRycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJyszNTknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQnVya2luYSBGYXNvJyxcclxuICAgICAgICBjb2RlOiAnQkYnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjI2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0J1cm1hIE15YW5tYXInLFxyXG4gICAgICAgIGNvZGU6ICdNTScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys5NSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCdXJ1bmRpJyxcclxuICAgICAgICBjb2RlOiAnQkknLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjU3J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NhbWJvZGlhJyxcclxuICAgICAgICBjb2RlOiAnS0gnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrODU1J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NhbWVyb29uJyxcclxuICAgICAgICBjb2RlOiAnQ00nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjM3J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NhbmFkYScsXHJcbiAgICAgICAgY29kZTogJ0NBJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ2FwZSBWZXJkZScsXHJcbiAgICAgICAgY29kZTogJ0NWJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIzOCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdDYXltYW4gSXNsYW5kcycsXHJcbiAgICAgICAgY29kZTogJ0tZJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcclxuICAgICAgICBjb2RlOiAnQ0YnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjM2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NoYWQnLFxyXG4gICAgICAgIGNvZGU6ICdJRCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyMzUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ2hpbGUnLFxyXG4gICAgICAgIGNvZGU6ICdDTCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys1NidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdDaGluYScsXHJcbiAgICAgICAgY29kZTogJ0NOJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzg2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NvbG9tYmlhJyxcclxuICAgICAgICBjb2RlOiAnQ08nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ29tb3JvcycsXHJcbiAgICAgICAgY29kZTogJ0tNJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2OSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdDb29rIElzbGFuZHMnLFxyXG4gICAgICAgIGNvZGU6ICdDSycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2ODInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ29zdGEgUmljYScsXHJcbiAgICAgICAgY29kZTogJ0NSJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwNidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdDw7R0ZSBkSXZvaXJlJyxcclxuICAgICAgICBjb2RlOiAnQ0knLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjI1J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0Nyb2F0aWEnLFxyXG4gICAgICAgIGNvZGU6ICdIUicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJyszODUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnQ3ViYScsXHJcbiAgICAgICAgY29kZTogJ0NVJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0N5cHJ1cycsXHJcbiAgICAgICAgY29kZTogJ0NZJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM1NydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdDemVjaCBSZXB1YmxpYycsXHJcbiAgICAgICAgY29kZTogJ0NaJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzQyMCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdEZW1vY3JhdGljIFJlcHVibGljIG9mIENvbmdvJyxcclxuICAgICAgICBjb2RlOiAnQ0QnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjQzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0Rlbm1hcmsnLFxyXG4gICAgICAgIGNvZGU6ICdESycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys0NSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdEamlib3V0aScsXHJcbiAgICAgICAgY29kZTogJ0RKJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI1MydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdEb21pbmljYScsXHJcbiAgICAgICAgY29kZTogJ0RNJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRG9taW5pY2FuIFJlcHVibGljJyxcclxuICAgICAgICBjb2RlOiAnRE8nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdFY3VhZG9yJyxcclxuICAgICAgICBjb2RlOiAnRUMnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTkzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0VneXB0JyxcclxuICAgICAgICBjb2RlOiAnRUcnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRWwgU2FsdmFkb3InLFxyXG4gICAgICAgIGNvZGU6ICdTVicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys1MDMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRXF1YXRvcmlhbCBHdWluZWEnLFxyXG4gICAgICAgIGNvZGU6ICdHUScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyNDAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRXJpdHJlYScsXHJcbiAgICAgICAgY29kZTogJ0VSJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI5MSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdFc3RvbmlhJyxcclxuICAgICAgICBjb2RlOiAnRUUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzcyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0V0aGlvcGlhJyxcclxuICAgICAgICBjb2RlOiAnRVQnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjUxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMnLFxyXG4gICAgICAgIGNvZGU6ICdGSycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys1MDAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRmFyb2UgSXNsYW5kcycsXHJcbiAgICAgICAgY29kZTogJ0ZPJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI5OCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdGZWRlcmF0ZWQgU3RhdGVzIG9mIE1pY3JvbmVzaWEnLFxyXG4gICAgICAgIGNvZGU6ICdGTScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2OTEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRmlqaScsXHJcbiAgICAgICAgY29kZTogJ0ZKJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY3OSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdGaW5sYW5kJyxcclxuICAgICAgICBjb2RlOiAnRkknLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzU4J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0ZyYW5jZScsXHJcbiAgICAgICAgY29kZTogJ0ZSJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzMzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0ZyZW5jaCBHdWlhbmEnLFxyXG4gICAgICAgIGNvZGU6ICdHRicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnRnJlbmNoIFBvbHluZXNpYScsXHJcbiAgICAgICAgY29kZTogJ1BGJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY4OSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdHYWJvbicsXHJcbiAgICAgICAgY29kZTogJ0dBJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI0MSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdHZW9yZ2lhJyxcclxuICAgICAgICBjb2RlOiAnR0UnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTk1J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0dlcm1hbnknLFxyXG4gICAgICAgIGNvZGU6ICdERScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys0OSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdHaGFuYScsXHJcbiAgICAgICAgY29kZTogJ0dIJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIzMydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdHaWJyYWx0YXInLFxyXG4gICAgICAgIGNvZGU6ICdHSScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJyszNTAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnR3JlZWNlJyxcclxuICAgICAgICBjb2RlOiAnR1InLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnR3JlZW5sYW5kJyxcclxuICAgICAgICBjb2RlOiAnR0wnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0dyZW5hZGEnLFxyXG4gICAgICAgIGNvZGU6ICdHRCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0d1YWRlbG91cGUnLFxyXG4gICAgICAgIGNvZGU6ICdHUCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnR3VhbScsXHJcbiAgICAgICAgY29kZTogJ0dVJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnR3VhdGVtYWxhJyxcclxuICAgICAgICBjb2RlOiAnR1QnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTAyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0d1aW5lYScsXHJcbiAgICAgICAgY29kZTogJ0dOJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIyNCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdHdWluZWEtQmlzc2F1JyxcclxuICAgICAgICBjb2RlOiAnR1cnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjQ1J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0d1eWFuYScsXHJcbiAgICAgICAgY29kZTogJ0dZJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5MidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdIYWl0aScsXHJcbiAgICAgICAgY29kZTogJ0hUJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwOSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdIb25kdXJhcycsXHJcbiAgICAgICAgY29kZTogJ0hOJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwNCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdIb25nIEtvbmcnLFxyXG4gICAgICAgIGNvZGU6ICdISycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys4NTInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnSHVuZ2FyeScsXHJcbiAgICAgICAgY29kZTogJ0hVJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0ljZWxhbmQnLFxyXG4gICAgICAgIGNvZGU6ICdJUycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJyszNTQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnSW5kaWEnLFxyXG4gICAgICAgIGNvZGU6ICdJTicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys5MSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdJbmRvbmVzaWEnLFxyXG4gICAgICAgIGNvZGU6ICdJRCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2MidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdJcmFuJyxcclxuICAgICAgICBjb2RlOiAnSVInLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnSXJhcScsXHJcbiAgICAgICAgY29kZTogJ0lRJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdJcmVsYW5kJyxcclxuICAgICAgICBjb2RlOiAnSUUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzUzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0lzcmFlbCcsXHJcbiAgICAgICAgY29kZTogJ0lMJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk3MidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdJdGFseScsXHJcbiAgICAgICAgY29kZTogJ0lUJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0phbWFpY2EnLFxyXG4gICAgICAgIGNvZGU6ICdKTScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0phcGFuJyxcclxuICAgICAgICBjb2RlOiAnSlAnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrODEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnSm9yZGFuJyxcclxuICAgICAgICBjb2RlOiAnSk8nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTYyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0themFraHN0YW4nLFxyXG4gICAgICAgIGNvZGU6ICdLWicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys3J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0tlbnlhJyxcclxuICAgICAgICBjb2RlOiAnS0UnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjU0J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0tpcmliYXRpJyxcclxuICAgICAgICBjb2RlOiAnS0knLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjg2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0tvc292bycsXHJcbiAgICAgICAgY29kZTogJ1hLJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM4MydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdLdXdhaXQnLFxyXG4gICAgICAgIGNvZGU6ICdLVycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys5NjUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnS3lyZ3l6c3RhbicsXHJcbiAgICAgICAgY29kZTogJ0tHJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk5NidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdMYW9zJyxcclxuICAgICAgICBjb2RlOiAnTEEnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrODU2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0xhdHZpYScsXHJcbiAgICAgICAgY29kZTogJ0xWJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM3MSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdMZWJhbm9uJyxcclxuICAgICAgICBjb2RlOiAnTEInLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTYxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0xlc290aG8nLFxyXG4gICAgICAgIGNvZGU6ICdMUycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyNjYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTGliZXJpYScsXHJcbiAgICAgICAgY29kZTogJ0xSJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIzMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdMaWJ5YScsXHJcbiAgICAgICAgY29kZTogJ0xZJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIxOCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdMaWVjaHRlbnN0ZWluJyxcclxuICAgICAgICBjb2RlOiAnTEknLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDIzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0xpdGh1YW5pYScsXHJcbiAgICAgICAgY29kZTogJ0xUJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM3MCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdMdXhlbWJvdXJnJyxcclxuICAgICAgICBjb2RlOiAnTFUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzUyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ01hY2F1JyxcclxuICAgICAgICBjb2RlOiAnTU8nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrODUzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ01hY2Vkb25pYScsXHJcbiAgICAgICAgY29kZTogJ01LJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM4OSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdNYWRhZ2FzY2FyJyxcclxuICAgICAgICBjb2RlOiAnTUcnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjYxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ01hbGF3aScsXHJcbiAgICAgICAgY29kZTogJ01XJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2NSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdNYWxheXNpYScsXHJcbiAgICAgICAgY29kZTogJ01ZJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzYwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ01hbGRpdmVzJyxcclxuICAgICAgICBjb2RlOiAnTVYnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTYwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ01hbGknLFxyXG4gICAgICAgIGNvZGU6ICdNTCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyMjMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTWFsdGEnLFxyXG4gICAgICAgIGNvZGU6ICdNVCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJyszNTYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTWFyc2hhbGwgSXNsYW5kcycsXHJcbiAgICAgICAgY29kZTogJ01IJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY5MidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdNYXJ0aW5pcXVlJyxcclxuICAgICAgICBjb2RlOiAnTVEnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTk2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ01hdXJpdGFuaWEnLFxyXG4gICAgICAgIGNvZGU6ICdNUicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyMjInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTWF1cml0aXVzJyxcclxuICAgICAgICBjb2RlOiAnTVUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjMwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ01heW90dGUnLFxyXG4gICAgICAgIGNvZGU6ICdZVCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyNjInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTWV4aWNvJyxcclxuICAgICAgICBjb2RlOiAnTVgnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTW9sZG92YScsXHJcbiAgICAgICAgY29kZTogJ01EJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM3MydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdNb25hY28nLFxyXG4gICAgICAgIGNvZGU6ICdNQycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJyszNzcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTW9uZ29saWEnLFxyXG4gICAgICAgIGNvZGU6ICdNTicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys5NzYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTW9udGVuZWdybycsXHJcbiAgICAgICAgY29kZTogJ01FJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM4MidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdNb250c2VycmF0JyxcclxuICAgICAgICBjb2RlOiAnTVMnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdNb3JvY2NvJyxcclxuICAgICAgICBjb2RlOiAnTUEnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjEyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ01vemFtYmlxdWUnLFxyXG4gICAgICAgIGNvZGU6ICdNWicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyNTgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTmFtaWJpYScsXHJcbiAgICAgICAgY29kZTogJ05BJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdOYXVydScsXHJcbiAgICAgICAgY29kZTogJ05SJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY3NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdOZXBhbCcsXHJcbiAgICAgICAgY29kZTogJ05QJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk3NydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdOZXRoZXJsYW5kcycsXHJcbiAgICAgICAgY29kZTogJ05MJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzMxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ05ldGhlcmxhbmRzIEFudGlsbGVzJyxcclxuICAgICAgICBjb2RlOiAnQU4nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTk5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ05ldyBDYWxlZG9uaWEnLFxyXG4gICAgICAgIGNvZGU6ICdOQycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2ODcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTmV3IFplYWxhbmQnLFxyXG4gICAgICAgIGNvZGU6ICdOWicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdOaWNhcmFndWEnLFxyXG4gICAgICAgIGNvZGU6ICdOSScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys1MDUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTmlnZXInLFxyXG4gICAgICAgIGNvZGU6ICdORScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyMjcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTmlnZXJpYScsXHJcbiAgICAgICAgY29kZTogJ05HJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIzNCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdOaXVlJyxcclxuICAgICAgICBjb2RlOiAnTlUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjgzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ05vcmZvbGsgSXNsYW5kJyxcclxuICAgICAgICBjb2RlOiAnTkYnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjcyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ05vcnRoIEtvcmVhJyxcclxuICAgICAgICBjb2RlOiAnS1AnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrODUwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXHJcbiAgICAgICAgY29kZTogJ01QJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnTm9yd2F5JyxcclxuICAgICAgICBjb2RlOiAnTk8nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnT21hbicsXHJcbiAgICAgICAgY29kZTogJ09NJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2OCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQYWtpc3RhbicsXHJcbiAgICAgICAgY29kZTogJ1BLJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzkyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1BhbGF1JyxcclxuICAgICAgICBjb2RlOiAnUFcnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjgwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1BhbGVzdGluZScsXHJcbiAgICAgICAgY29kZTogJ1BTJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk3MCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQYW5hbWEnLFxyXG4gICAgICAgIGNvZGU6ICdQQScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys1MDcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnUGFwdWEgTmV3IEd1aW5lYScsXHJcbiAgICAgICAgY29kZTogJ1BHJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY3NSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQYXJhZ3VheScsXHJcbiAgICAgICAgY29kZTogJ1BZJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5NSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQZXJ1JyxcclxuICAgICAgICBjb2RlOiAnUEUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnUGhpbGlwcGluZXMnLFxyXG4gICAgICAgIGNvZGU6ICdQSCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2MydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQb2xhbmQnLFxyXG4gICAgICAgIGNvZGU6ICdQTCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys0OCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQb3J0dWdhbCcsXHJcbiAgICAgICAgY29kZTogJ1BUJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM1MSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdQdWVydG8gUmljbycsXHJcbiAgICAgICAgY29kZTogJ1BSJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnUWF0YXInLFxyXG4gICAgICAgIGNvZGU6ICdRQScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys5NzQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcclxuICAgICAgICBjb2RlOiAnQ0cnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjQyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1LDqXVuaW9uJyxcclxuICAgICAgICBjb2RlOiAnUkUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjYyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1JvbWFuaWEnLFxyXG4gICAgICAgIGNvZGU6ICdSTycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys0MCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdSdXNzaWEnLFxyXG4gICAgICAgIGNvZGU6ICdSVScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys3J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1J3YW5kYScsXHJcbiAgICAgICAgY29kZTogJ1JXJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI1MCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTYWludCBCYXJ0aMOpbGVteScsXHJcbiAgICAgICAgY29kZTogJ0JMJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5MCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTYWludCBIZWxlbmEnLFxyXG4gICAgICAgIGNvZGU6ICdTSCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyOTAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcclxuICAgICAgICBjb2RlOiAnS04nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTYWludCBNYXJ0aW4nLFxyXG4gICAgICAgIGNvZGU6ICdNRicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicsXHJcbiAgICAgICAgY29kZTogJ1BNJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwOCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXHJcbiAgICAgICAgY29kZTogJ1ZDJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnU2Ftb2EnLFxyXG4gICAgICAgIGNvZGU6ICdXUycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2ODUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnU2FuIE1hcmlubycsXHJcbiAgICAgICAgY29kZTogJ1NNJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM3OCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTw6NvIFRvbcOpIGFuZCBQcsOtbmNpcGUnLFxyXG4gICAgICAgIGNvZGU6ICdTVCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyMzknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnU2F1ZGkgQXJhYmlhJyxcclxuICAgICAgICBjb2RlOiAnU0EnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTY2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NlbmVnYWwnLFxyXG4gICAgICAgIGNvZGU6ICdTTicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyMjEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnU2VyYmlhJyxcclxuICAgICAgICBjb2RlOiAnUlMnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzgxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NleWNoZWxsZXMnLFxyXG4gICAgICAgIGNvZGU6ICdTQycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyNDgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnU2llcnJhIExlb25lJyxcclxuICAgICAgICBjb2RlOiAnU0wnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjMyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NpbmdhcG9yZScsXHJcbiAgICAgICAgY29kZTogJ1NHJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY1J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1Nsb3Zha2lhJyxcclxuICAgICAgICBjb2RlOiAnU0snLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDIxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1Nsb3ZlbmlhJyxcclxuICAgICAgICBjb2RlOiAnU0knLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzg2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NvbG9tb24gSXNsYW5kcycsXHJcbiAgICAgICAgY29kZTogJ1NCJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY3NydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTb21hbGlhJyxcclxuICAgICAgICBjb2RlOiAnU08nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjUyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NvdXRoIEFmcmljYScsXHJcbiAgICAgICAgY29kZTogJ1pBJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI3J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NvdXRoIEtvcmVhJyxcclxuICAgICAgICBjb2RlOiAnS1InLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrODInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnU3BhaW4nLFxyXG4gICAgICAgIGNvZGU6ICdFUycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJyszNCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTcmkgTGFua2EnLFxyXG4gICAgICAgIGNvZGU6ICdMSycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys5NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTdC4gTHVjaWEnLFxyXG4gICAgICAgIGNvZGU6ICdMQycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1N1ZGFuJyxcclxuICAgICAgICBjb2RlOiAnU0QnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjQ5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1N1cmluYW1lJyxcclxuICAgICAgICBjb2RlOiAnU1InLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTk3J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1N3YXppbGFuZCcsXHJcbiAgICAgICAgY29kZTogJ1NaJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2OCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTd2VkZW4nLFxyXG4gICAgICAgIGNvZGU6ICdTRScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys0NidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdTd2l0emVybGFuZCcsXHJcbiAgICAgICAgY29kZTogJ0NIJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzQxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1N5cmlhJyxcclxuICAgICAgICBjb2RlOiAnU1knLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTYzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1RhaXdhbicsXHJcbiAgICAgICAgY29kZTogJ1RXJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzg4NidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdUYWppa2lzdGFuJyxcclxuICAgICAgICBjb2RlOiAnVEonLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTkyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1RhbnphbmlhJyxcclxuICAgICAgICBjb2RlOiAnVFonLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjU1J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1RoYWlsYW5kJyxcclxuICAgICAgICBjb2RlOiAnVEgnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVGhlIEJhaGFtYXMnLFxyXG4gICAgICAgIGNvZGU6ICdCUycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1RoZSBHYW1iaWEnLFxyXG4gICAgICAgIGNvZGU6ICdHTScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyMjAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVGltb3ItTGVzdGUnLFxyXG4gICAgICAgIGNvZGU6ICdUTCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys2NzAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVG9nbycsXHJcbiAgICAgICAgY29kZTogJ1RHJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIyOCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdUb2tlbGF1JyxcclxuICAgICAgICBjb2RlOiAnVEsnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjkwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1RvbmdhJyxcclxuICAgICAgICBjb2RlOiAnVE8nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjc2J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxyXG4gICAgICAgIGNvZGU6ICdUVCcsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1R1bmlzaWEnLFxyXG4gICAgICAgIGNvZGU6ICdUTicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyMTYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVHVya2V5JyxcclxuICAgICAgICBjb2RlOiAnVFInLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVHVya21lbmlzdGFuJyxcclxuICAgICAgICBjb2RlOiAnVE0nLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTkzJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsXHJcbiAgICAgICAgY29kZTogJ1RDJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVHV2YWx1JyxcclxuICAgICAgICBjb2RlOiAnVFYnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjg4J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1VnYW5kYScsXHJcbiAgICAgICAgY29kZTogJ1VHJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI1NidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdVa3JhaW5lJyxcclxuICAgICAgICBjb2RlOiAnVUEnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzgwJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcclxuICAgICAgICBjb2RlOiAnQUUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTcxJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAgICAgICBjb2RlOiAnR0InLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcycsXHJcbiAgICAgICAgY29kZTogJ1VTJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVXJ1Z3VheScsXHJcbiAgICAgICAgY29kZTogJ1VZJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5OCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdVUyBWaXJnaW4gSXNsYW5kcycsXHJcbiAgICAgICAgY29kZTogJ1ZJJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnVXpiZWtpc3RhbicsXHJcbiAgICAgICAgY29kZTogJ1VaJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk5OCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdWYW51YXR1JyxcclxuICAgICAgICBjb2RlOiAnVlUnLFxyXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjc4J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1ZhdGljYW4gQ2l0eScsXHJcbiAgICAgICAgY29kZTogJ1ZBJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1ZlbmV6dWVsYScsXHJcbiAgICAgICAgY29kZTogJ1ZFJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU4J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ1ZpZXRuYW0nLFxyXG4gICAgICAgIGNvZGU6ICdWTicsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJys4NCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdXYWxsaXMgYW5kIEZ1dHVuYScsXHJcbiAgICAgICAgY29kZTogJ1dGJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY4MSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdZZW1lbicsXHJcbiAgICAgICAgY29kZTogJ1lFJyxcclxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2NydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdaYW1iaWEnLFxyXG4gICAgICAgIGNvZGU6ICdaTScsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyNjAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnWmltYmFid2UnLFxyXG4gICAgICAgIGNvZGU6ICdaVycsXHJcbiAgICAgICAgcGhvbmVfY29kZTogJysyNjMnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=