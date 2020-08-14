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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZGF0bmVrLWNvdW50cnktc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kYXRuZWstY291bnRyeS1zZWxlY3Qvc3JjL2xpYi9uZy1kYXRuZWstY291bnRyeS1zZWxlY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTWhELE1BQU0sT0FBTyw0QkFBNEI7SUFHdkMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNuQywwQ0FBMEM7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxrREFBa0QsQ0FBQztJQUNoRSxDQUFDO0lBR0QsbUNBQW1DO0lBQ25DLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU87WUFDTDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsVUFBVSxFQUFFLEtBQUs7YUFDbEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsSUFBSTtnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxJQUFJO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsSUFBSTtnQkFDVixVQUFVLEVBQUUsTUFB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ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0NvdW50cnl9IGZyb20gJy4vY291bnRyeS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nRGF0bmVrQ291bnRyeVNlbGVjdFNlcnZpY2Uge1xuXG4gIHVybDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgIC8vIHRoaXMudXJsID0gJy9hc3NldHMvZGF0YS9jb3VudHJ5Lmpzb24nO1xuICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vZmFzdGRpc2NhcnJ5LmJlL2Fzc2V0cy9kYXRhL2NvdW50cnkuanNvbic7XG4gIH1cblxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXG4gIGdldENvdW50cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q291bnRyeVtdPih0aGlzLnVybCk7XG4gIH1cblxuICBnZXREYXRhKCk6IENvdW50cnlbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FmZ2hhbmlzdGFuJyxcbiAgICAgICAgY29kZTogJ0FGJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5MydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbGJhbmlhJyxcbiAgICAgICAgY29kZTogJ0FMJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszNTUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQWxnZXJpYScsXG4gICAgICAgIGNvZGU6ICdEWicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjEzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgICAgICAgY29kZTogJ0FTJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FuZG9ycmEnLFxuICAgICAgICBjb2RlOiAnQUQnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM3NidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbmdvbGEnLFxuICAgICAgICBjb2RlOiAnQU8nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI0NCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbmd1aWxsYScsXG4gICAgICAgIGNvZGU6ICdBSScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbnRpZ3VhJyxcbiAgICAgICAgY29kZTogJ0FHJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FyZ2VudGluYScsXG4gICAgICAgIGNvZGU6ICdBUicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQXJtZW5pYScsXG4gICAgICAgIGNvZGU6ICdBTScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzc0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FydWJhJyxcbiAgICAgICAgY29kZTogJ0FXJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyOTcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQXVzdHJhbGlhJyxcbiAgICAgICAgY29kZTogJ0FVJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBdXN0cmlhJyxcbiAgICAgICAgY29kZTogJ0FJJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys0MydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBemVyYmFpamFuJyxcbiAgICAgICAgY29kZTogJ0FaJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5OTQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmFocmFpbicsXG4gICAgICAgIGNvZGU6ICdCSCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTczJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JhbmdsYWRlc2gnLFxuICAgICAgICBjb2RlOiAnQkQnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzg4MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCYXJiYWRvcycsXG4gICAgICAgIGNvZGU6ICdCQicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZWxhcnVzJyxcbiAgICAgICAgY29kZTogJ0JZJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszNzUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVsZ2l1bScsXG4gICAgICAgIGNvZGU6ICdCRScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVsaXplJyxcbiAgICAgICAgY29kZTogJ0JaJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1MDEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVuaW4nLFxuICAgICAgICBjb2RlOiAnQkonLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIyOSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJtdWRhJyxcbiAgICAgICAgY29kZTogJ0JNJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JodXRhbicsXG4gICAgICAgIGNvZGU6ICdCVCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTc1J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JvbGl2aWEnLFxuICAgICAgICBjb2RlOiAnQk8nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hJyxcbiAgICAgICAgY29kZTogJ0JBJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszODcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQm90c3dhbmEnLFxuICAgICAgICBjb2RlOiAnQlcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2NydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCcmF6aWwnLFxuICAgICAgICBjb2RlOiAnQlInLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU1J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXG4gICAgICAgIGNvZGU6ICdJTycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjQ2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JyaXRpc2ggVmlyZ2luIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnVkcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQnJ1bmVpJyxcbiAgICAgICAgY29kZTogJ0JOJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2NzMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQnVsZ2FyaWEnLFxuICAgICAgICBjb2RlOiAnQkcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM1OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCdXJraW5hIEZhc28nLFxuICAgICAgICBjb2RlOiAnQkYnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIyNidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCdXJtYSBNeWFubWFyJyxcbiAgICAgICAgY29kZTogJ01NJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCdXJ1bmRpJyxcbiAgICAgICAgY29kZTogJ0JJJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNTcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2FtYm9kaWEnLFxuICAgICAgICBjb2RlOiAnS0gnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzg1NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDYW1lcm9vbicsXG4gICAgICAgIGNvZGU6ICdDTScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjM3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NhbmFkYScsXG4gICAgICAgIGNvZGU6ICdDQScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDYXBlIFZlcmRlJyxcbiAgICAgICAgY29kZTogJ0NWJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyMzgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2F5bWFuIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnS1knLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcbiAgICAgICAgY29kZTogJ0NGJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyMzYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2hhZCcsXG4gICAgICAgIGNvZGU6ICdJRCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjM1J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NoaWxlJyxcbiAgICAgICAgY29kZTogJ0NMJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1NidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDaGluYScsXG4gICAgICAgIGNvZGU6ICdDTicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrODYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ29sb21iaWEnLFxuICAgICAgICBjb2RlOiAnQ08nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NvbW9yb3MnLFxuICAgICAgICBjb2RlOiAnS00nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDb29rIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnQ0snLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY4MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDb3N0YSBSaWNhJyxcbiAgICAgICAgY29kZTogJ0NSJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1MDYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ8O0dGUgZEl2b2lyZScsXG4gICAgICAgIGNvZGU6ICdDSScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjI1J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Nyb2F0aWEnLFxuICAgICAgICBjb2RlOiAnSFInLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM4NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDdWJhJyxcbiAgICAgICAgY29kZTogJ0NVJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1MydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDeXBydXMnLFxuICAgICAgICBjb2RlOiAnQ1knLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM1NydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDemVjaCBSZXB1YmxpYycsXG4gICAgICAgIGNvZGU6ICdDWicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDIwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0RlbW9jcmF0aWMgUmVwdWJsaWMgb2YgQ29uZ28nLFxuICAgICAgICBjb2RlOiAnQ0QnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI0MydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdEZW5tYXJrJyxcbiAgICAgICAgY29kZTogJ0RLJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys0NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdEamlib3V0aScsXG4gICAgICAgIGNvZGU6ICdESicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjUzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0RvbWluaWNhJyxcbiAgICAgICAgY29kZTogJ0RNJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gICAgICAgIGNvZGU6ICdETycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdFY3VhZG9yJyxcbiAgICAgICAgY29kZTogJ0VDJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRWd5cHQnLFxuICAgICAgICBjb2RlOiAnRUcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0VsIFNhbHZhZG9yJyxcbiAgICAgICAgY29kZTogJ1NWJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1MDMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRXF1YXRvcmlhbCBHdWluZWEnLFxuICAgICAgICBjb2RlOiAnR1EnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI0MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdFcml0cmVhJyxcbiAgICAgICAgY29kZTogJ0VSJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyOTEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRXN0b25pYScsXG4gICAgICAgIGNvZGU6ICdFRScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzcyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0V0aGlvcGlhJyxcbiAgICAgICAgY29kZTogJ0VUJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNTEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRmFsa2xhbmQgSXNsYW5kcycsXG4gICAgICAgIGNvZGU6ICdGSycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTAwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Zhcm9lIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnRk8nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI5OCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdGZWRlcmF0ZWQgU3RhdGVzIG9mIE1pY3JvbmVzaWEnLFxuICAgICAgICBjb2RlOiAnRk0nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY5MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdGaWppJyxcbiAgICAgICAgY29kZTogJ0ZKJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2NzknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRmlubGFuZCcsXG4gICAgICAgIGNvZGU6ICdGSScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzU4J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0ZyYW5jZScsXG4gICAgICAgIGNvZGU6ICdGUicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRnJlbmNoIEd1aWFuYScsXG4gICAgICAgIGNvZGU6ICdHRicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTk0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxuICAgICAgICBjb2RlOiAnUEYnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY4OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHYWJvbicsXG4gICAgICAgIGNvZGU6ICdHQScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjQxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0dlb3JnaWEnLFxuICAgICAgICBjb2RlOiAnR0UnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk5NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHZXJtYW55JyxcbiAgICAgICAgY29kZTogJ0RFJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys0OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHaGFuYScsXG4gICAgICAgIGNvZGU6ICdHSCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjMzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0dpYnJhbHRhcicsXG4gICAgICAgIGNvZGU6ICdHSScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzUwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVjZScsXG4gICAgICAgIGNvZGU6ICdHUicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnR3JlZW5sYW5kJyxcbiAgICAgICAgY29kZTogJ0dMJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyOTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnR3JlbmFkYScsXG4gICAgICAgIGNvZGU6ICdHRCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHdWFkZWxvdXBlJyxcbiAgICAgICAgY29kZTogJ0dQJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnR3VhbScsXG4gICAgICAgIGNvZGU6ICdHVScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHdWF0ZW1hbGEnLFxuICAgICAgICBjb2RlOiAnR1QnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwMidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHdWluZWEnLFxuICAgICAgICBjb2RlOiAnR04nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIyNCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHdWluZWEtQmlzc2F1JyxcbiAgICAgICAgY29kZTogJ0dXJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNDUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnR3V5YW5hJyxcbiAgICAgICAgY29kZTogJ0dZJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnSGFpdGknLFxuICAgICAgICBjb2RlOiAnSFQnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwOSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdIb25kdXJhcycsXG4gICAgICAgIGNvZGU6ICdITicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTA0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0hvbmcgS29uZycsXG4gICAgICAgIGNvZGU6ICdISycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrODUyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0h1bmdhcnknLFxuICAgICAgICBjb2RlOiAnSFUnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0ljZWxhbmQnLFxuICAgICAgICBjb2RlOiAnSVMnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM1NCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdJbmRpYScsXG4gICAgICAgIGNvZGU6ICdJTicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnSW5kb25lc2lhJyxcbiAgICAgICAgY29kZTogJ0lEJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdJcmFuJyxcbiAgICAgICAgY29kZTogJ0lSJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5OCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdJcmFxJyxcbiAgICAgICAgY29kZTogJ0lRJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5NjQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnSXJlbGFuZCcsXG4gICAgICAgIGNvZGU6ICdJRScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzUzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0lzcmFlbCcsXG4gICAgICAgIGNvZGU6ICdJTCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTcyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0l0YWx5JyxcbiAgICAgICAgY29kZTogJ0lUJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszOSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdKYW1haWNhJyxcbiAgICAgICAgY29kZTogJ0pNJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0phcGFuJyxcbiAgICAgICAgY29kZTogJ0pQJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys4MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdKb3JkYW4nLFxuICAgICAgICBjb2RlOiAnSk8nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdLYXpha2hzdGFuJyxcbiAgICAgICAgY29kZTogJ0taJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0tlbnlhJyxcbiAgICAgICAgY29kZTogJ0tFJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNTQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnS2lyaWJhdGknLFxuICAgICAgICBjb2RlOiAnS0knLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY4NidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdLb3Nvdm8nLFxuICAgICAgICBjb2RlOiAnWEsnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM4MydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdLdXdhaXQnLFxuICAgICAgICBjb2RlOiAnS1cnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdLeXJneXpzdGFuJyxcbiAgICAgICAgY29kZTogJ0tHJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5OTYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTGFvcycsXG4gICAgICAgIGNvZGU6ICdMQScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrODU2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0xhdHZpYScsXG4gICAgICAgIGNvZGU6ICdMVicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzcxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0xlYmFub24nLFxuICAgICAgICBjb2RlOiAnTEInLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdMZXNvdGhvJyxcbiAgICAgICAgY29kZTogJ0xTJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNjYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTGliZXJpYScsXG4gICAgICAgIGNvZGU6ICdMUicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjMxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0xpYnlhJyxcbiAgICAgICAgY29kZTogJ0xZJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyMTgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTGllY2h0ZW5zdGVpbicsXG4gICAgICAgIGNvZGU6ICdMSScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDIzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0xpdGh1YW5pYScsXG4gICAgICAgIGNvZGU6ICdMVCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzcwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0x1eGVtYm91cmcnLFxuICAgICAgICBjb2RlOiAnTFUnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM1MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYWNhdScsXG4gICAgICAgIGNvZGU6ICdNTycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrODUzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01hY2Vkb25pYScsXG4gICAgICAgIGNvZGU6ICdNSycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzg5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01hZGFnYXNjYXInLFxuICAgICAgICBjb2RlOiAnTUcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYWxhd2knLFxuICAgICAgICBjb2RlOiAnTVcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYWxheXNpYScsXG4gICAgICAgIGNvZGU6ICdNWScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWFsZGl2ZXMnLFxuICAgICAgICBjb2RlOiAnTVYnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYWxpJyxcbiAgICAgICAgY29kZTogJ01MJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyMjMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWFsdGEnLFxuICAgICAgICBjb2RlOiAnTVQnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM1NidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYXJzaGFsbCBJc2xhbmRzJyxcbiAgICAgICAgY29kZTogJ01IJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2OTInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWFydGluaXF1ZScsXG4gICAgICAgIGNvZGU6ICdNUScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTk2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01hdXJpdGFuaWEnLFxuICAgICAgICBjb2RlOiAnTVInLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIyMidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYXVyaXRpdXMnLFxuICAgICAgICBjb2RlOiAnTVUnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIzMCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYXlvdHRlJyxcbiAgICAgICAgY29kZTogJ1lUJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNjInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWV4aWNvJyxcbiAgICAgICAgY29kZTogJ01YJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNb2xkb3ZhJyxcbiAgICAgICAgY29kZTogJ01EJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszNzMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTW9uYWNvJyxcbiAgICAgICAgY29kZTogJ01DJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszNzcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTW9uZ29saWEnLFxuICAgICAgICBjb2RlOiAnTU4nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk3NidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNb250ZW5lZ3JvJyxcbiAgICAgICAgY29kZTogJ01FJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszODInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTW9udHNlcnJhdCcsXG4gICAgICAgIGNvZGU6ICdNUycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNb3JvY2NvJyxcbiAgICAgICAgY29kZTogJ01BJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyMTInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTW96YW1iaXF1ZScsXG4gICAgICAgIGNvZGU6ICdNWicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjU4J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05hbWliaWEnLFxuICAgICAgICBjb2RlOiAnTkEnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2NCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOYXVydScsXG4gICAgICAgIGNvZGU6ICdOUicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjc0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05lcGFsJyxcbiAgICAgICAgY29kZTogJ05QJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5NzcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTmV0aGVybGFuZHMnLFxuICAgICAgICBjb2RlOiAnTkwnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzMxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05ldGhlcmxhbmRzIEFudGlsbGVzJyxcbiAgICAgICAgY29kZTogJ0FOJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTmV3IENhbGVkb25pYScsXG4gICAgICAgIGNvZGU6ICdOQycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjg3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05ldyBaZWFsYW5kJyxcbiAgICAgICAgY29kZTogJ05aJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2NCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOaWNhcmFndWEnLFxuICAgICAgICBjb2RlOiAnTkknLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwNSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOaWdlcicsXG4gICAgICAgIGNvZGU6ICdORScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjI3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05pZ2VyaWEnLFxuICAgICAgICBjb2RlOiAnTkcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIzNCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOaXVlJyxcbiAgICAgICAgY29kZTogJ05VJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2ODMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTm9yZm9sayBJc2xhbmQnLFxuICAgICAgICBjb2RlOiAnTkYnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY3MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOb3J0aCBLb3JlYScsXG4gICAgICAgIGNvZGU6ICdLUCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrODUwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXG4gICAgICAgIGNvZGU6ICdNUCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOb3J3YXknLFxuICAgICAgICBjb2RlOiAnTk8nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzQ3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ09tYW4nLFxuICAgICAgICBjb2RlOiAnT00nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2OCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQYWtpc3RhbicsXG4gICAgICAgIGNvZGU6ICdQSycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUGFsYXUnLFxuICAgICAgICBjb2RlOiAnUFcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY4MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQYWxlc3RpbmUnLFxuICAgICAgICBjb2RlOiAnUFMnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk3MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQYW5hbWEnLFxuICAgICAgICBjb2RlOiAnUEEnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzUwNydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICAgICAgY29kZTogJ1BHJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2NzUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUGFyYWd1YXknLFxuICAgICAgICBjb2RlOiAnUFknLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQZXJ1JyxcbiAgICAgICAgY29kZTogJ1BFJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQaGlsaXBwaW5lcycsXG4gICAgICAgIGNvZGU6ICdQSCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUG9sYW5kJyxcbiAgICAgICAgY29kZTogJ1BMJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys0OCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQb3J0dWdhbCcsXG4gICAgICAgIGNvZGU6ICdQVCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzUxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1B1ZXJ0byBSaWNvJyxcbiAgICAgICAgY29kZTogJ1BSJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1FhdGFyJyxcbiAgICAgICAgY29kZTogJ1FBJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5NzQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcbiAgICAgICAgY29kZTogJ0NHJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNDInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUsOpdW5pb24nLFxuICAgICAgICBjb2RlOiAnUkUnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSb21hbmlhJyxcbiAgICAgICAgY29kZTogJ1JPJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys0MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSdXNzaWEnLFxuICAgICAgICBjb2RlOiAnUlUnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUndhbmRhJyxcbiAgICAgICAgY29kZTogJ1JXJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNTAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2FpbnQgQmFydGjDqWxlbXknLFxuICAgICAgICBjb2RlOiAnQkwnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTYWludCBIZWxlbmEnLFxuICAgICAgICBjb2RlOiAnU0gnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI5MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTYWludCBLaXR0cyBhbmQgTmV2aXMnLFxuICAgICAgICBjb2RlOiAnS04nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2FpbnQgTWFydGluJyxcbiAgICAgICAgY29kZTogJ01GJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbicsXG4gICAgICAgIGNvZGU6ICdQTScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNTA4J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcbiAgICAgICAgY29kZTogJ1ZDJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NhbW9hJyxcbiAgICAgICAgY29kZTogJ1dTJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2ODUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2FuIE1hcmlubycsXG4gICAgICAgIGNvZGU6ICdTTScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzc4J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1PDo28gVG9tw6kgYW5kIFByw61uY2lwZScsXG4gICAgICAgIGNvZGU6ICdTVCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjM5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NhdWRpIEFyYWJpYScsXG4gICAgICAgIGNvZGU6ICdTQScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTY2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NlbmVnYWwnLFxuICAgICAgICBjb2RlOiAnU04nLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzIyMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTZXJiaWEnLFxuICAgICAgICBjb2RlOiAnUlMnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM4MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTZXljaGVsbGVzJyxcbiAgICAgICAgY29kZTogJ1NDJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNDgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2llcnJhIExlb25lJyxcbiAgICAgICAgY29kZTogJ1NMJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyMzInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2luZ2Fwb3JlJyxcbiAgICAgICAgY29kZTogJ1NHJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTbG92YWtpYScsXG4gICAgICAgIGNvZGU6ICdTSycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDIxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1Nsb3ZlbmlhJyxcbiAgICAgICAgY29kZTogJ1NJJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszODYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU29sb21vbiBJc2xhbmRzJyxcbiAgICAgICAgY29kZTogJ1NCJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2NzcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU29tYWxpYScsXG4gICAgICAgIGNvZGU6ICdTTycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjUyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NvdXRoIEFmcmljYScsXG4gICAgICAgIGNvZGU6ICdaQScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU291dGggS29yZWEnLFxuICAgICAgICBjb2RlOiAnS1InLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzgyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NwYWluJyxcbiAgICAgICAgY29kZTogJ0VTJyxcbiAgICAgICAgcGhvbmVfY29kZTogJyszNCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTcmkgTGFua2EnLFxuICAgICAgICBjb2RlOiAnTEsnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N0LiBMdWNpYScsXG4gICAgICAgIGNvZGU6ICdMQycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTdWRhbicsXG4gICAgICAgIGNvZGU6ICdTRCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjQ5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N1cmluYW1lJyxcbiAgICAgICAgY29kZTogJ1NSJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1OTcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU3dhemlsYW5kJyxcbiAgICAgICAgY29kZTogJ1NaJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNjgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU3dlZGVuJyxcbiAgICAgICAgY29kZTogJ1NFJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys0NidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTd2l0emVybGFuZCcsXG4gICAgICAgIGNvZGU6ICdDSCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNDEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU3lyaWEnLFxuICAgICAgICBjb2RlOiAnU1knLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzk2MydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUYWl3YW4nLFxuICAgICAgICBjb2RlOiAnVFcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzg4NidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUYWppa2lzdGFuJyxcbiAgICAgICAgY29kZTogJ1RKJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5OTInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVGFuemFuaWEnLFxuICAgICAgICBjb2RlOiAnVFonLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI1NSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUaGFpbGFuZCcsXG4gICAgICAgIGNvZGU6ICdUSCcsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVGhlIEJhaGFtYXMnLFxuICAgICAgICBjb2RlOiAnQlMnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVGhlIEdhbWJpYScsXG4gICAgICAgIGNvZGU6ICdHTScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjIwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RpbW9yLUxlc3RlJyxcbiAgICAgICAgY29kZTogJ1RMJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys2NzAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVG9nbycsXG4gICAgICAgIGNvZGU6ICdURycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjI4J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1Rva2VsYXUnLFxuICAgICAgICBjb2RlOiAnVEsnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzY5MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUb25nYScsXG4gICAgICAgIGNvZGU6ICdUTycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjc2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxuICAgICAgICBjb2RlOiAnVFQnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVHVuaXNpYScsXG4gICAgICAgIGNvZGU6ICdUTicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjE2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1R1cmtleScsXG4gICAgICAgIGNvZGU6ICdUUicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVHVya21lbmlzdGFuJyxcbiAgICAgICAgY29kZTogJ1RNJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5OTMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzJyxcbiAgICAgICAgY29kZTogJ1RDJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1R1dmFsdScsXG4gICAgICAgIGNvZGU6ICdUVicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjg4J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1VnYW5kYScsXG4gICAgICAgIGNvZGU6ICdVRycsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMjU2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1VrcmFpbmUnLFxuICAgICAgICBjb2RlOiAnVUEnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzM4MCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcycsXG4gICAgICAgIGNvZGU6ICdBRScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrOTcxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1VuaXRlZCBLaW5nZG9tJyxcbiAgICAgICAgY29kZTogJ0dCJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys0NCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdVbml0ZWQgU3RhdGVzJyxcbiAgICAgICAgY29kZTogJ1VTJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1VydWd1YXknLFxuICAgICAgICBjb2RlOiAnVVknLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzU5OCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdVUyBWaXJnaW4gSXNsYW5kcycsXG4gICAgICAgIGNvZGU6ICdWSScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdVemJla2lzdGFuJyxcbiAgICAgICAgY29kZTogJ1VaJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5OTgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVmFudWF0dScsXG4gICAgICAgIGNvZGU6ICdWVScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjc4J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1ZhdGljYW4gQ2l0eScsXG4gICAgICAgIGNvZGU6ICdWQScsXG4gICAgICAgIHBob25lX2NvZGU6ICcrMzknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVmVuZXp1ZWxhJyxcbiAgICAgICAgY29kZTogJ1ZFJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys1OCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdWaWV0bmFtJyxcbiAgICAgICAgY29kZTogJ1ZOJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys4NCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdXYWxsaXMgYW5kIEZ1dHVuYScsXG4gICAgICAgIGNvZGU6ICdXRicsXG4gICAgICAgIHBob25lX2NvZGU6ICcrNjgxJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1llbWVuJyxcbiAgICAgICAgY29kZTogJ1lFJyxcbiAgICAgICAgcGhvbmVfY29kZTogJys5NjcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnWmFtYmlhJyxcbiAgICAgICAgY29kZTogJ1pNJyxcbiAgICAgICAgcGhvbmVfY29kZTogJysyNjAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnWmltYmFid2UnLFxuICAgICAgICBjb2RlOiAnWlcnLFxuICAgICAgICBwaG9uZV9jb2RlOiAnKzI2MydcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbn1cbiJdfQ==