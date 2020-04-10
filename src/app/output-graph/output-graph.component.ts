import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highmaps";
import mapdata from "../mapdata";
import World_map from '@highcharts/map-collection/custom/world.geo.json';
import Report from '../corona-report.json'

mapdata(Highcharts);

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css']
})
export class OutputGraphComponent implements OnInit {
  title = "app";

  chart: any;
  Highcharts: any = Highcharts;
  chartConstructor: string = "mapChart";
  chartOptions: any;
  countryArray: any = [];

  constructor() {
   
    //length of json file
    const len = Report.length;
    const obj = Report[len - 1];

    // maping of country name to country code
    const isoCountries = {
      'Afghanistan': 'af',
      'Aland Islands': 'ax',
      'Albania': 'al',
      'Algeria': 'dz',
      'American Samoa': 'as',
      'Andorra': 'ad',
      'Angola': 'ao',
      'Anguilla': 'ai',
      'Antarctica': 'aq',
      'Antigua And Barbuda': 'ag',
      'Argentina': 'ar',
      'Armenia': 'am',
      'Aruba': 'aw',
      'Australia': 'au',
      'Austria': 'at',
      'Azerbaijan': 'az',
      'Bahamas': 'bs',
      'Bahrain': 'bh',
      'Bangladesh': 'bd',
      'Barbados': 'bb',
      'Belarus': 'by',
      'Belgium': 'be',
      'Belize': 'bz',
      'Benin': 'bj',
      'Bermuda': 'bm',
      'Bhutan': 'bt',
      'Bolivia': 'bo',
      'Bosnia And Herzegovina': 'ba',
      'Botswana': 'bw',
      'Bouvet Island': 'bv',
      'Brazil': 'br',
      'British Indian Ocean Territory': 'io',
      'Brunei Darussalam': 'bn',
      'Bulgaria': 'bg',
      'Burkina Faso': 'bf',
      'Burundi': 'bi',
      'Cambodia': 'kh',
      'Cameroon': 'cm',
      'Canada': 'ca',
      'Cape Verde': 'cv',
      'Cayman Islands': 'ky',
      'Central African Republic': 'cf',
      'Chad': 'td',
      'Chile': 'cl',
      'China': 'cn',
      'Christmas Island': 'cx',
      'Cocos (Keeling) Islands': 'cc',
      'Colombia': 'co',
      'Comoros': 'km',
      'Congo': 'cg',
      'Congo, Democratic Republic': 'cd',
      'Cook Islands': 'ck',
      'Costa Rica': 'cr',
      'Cote D\'Ivoire': 'ci',
      'Croatia': 'hr',
      'Cuba': 'cu',
      'Cyprus': 'cy',
      'Czech Republic': 'cz',
      'Denmark': 'dk',
      'Djibouti': 'dj',
      'Dominica': 'dm',
      'Dominican Republic': 'do',
      'Ecuador': 'ec',
      'Egypt': 'eg',
      'El Salvador': 'sv',
      'Equatorial Guinea': 'gq',
      'Eritrea': 'er',
      'Estonia': 'ee',
      'Ethiopia': 'et',
      'Falkland Islands': 'fk',
      'Faroe Islands': 'fo',
      'Fiji': 'fj',
      'Finland': 'fi',
      'France': 'fr',
      'French Guiana': 'gf',
      'French Polynesia': 'pf',
      'French Southern Territories': 'tf',
      'Gabon': 'ga',
      'Gambia': 'gm',
      'Georgia': 'ge',
      'Germany': 'de',
      'Ghana': 'gh',
      'Gibraltar': 'gi',
      'Greece': 'gr',
      'Greenland': 'gl',
      'Grenada': 'gd',
      'Guadeloupe': 'gp',
      'Guam': 'gu',
      'Guatemala': 'gt',
      'Guernsey': 'gg',
      'Guinea': 'gn',
      'Guinea-Bissau': 'gw',
      'Guyana': 'gy',
      'Haiti': 'ht',
      'Heard Island & Mcdonald Islands': 'hm',
      'Holy See (Vatican City State)': 'va',
      'Honduras': 'hn',
      'Hong Kong': 'hk',
      'Hungary': 'hu',
      'Iceland': 'is',
      'India': 'in',
      'Indonesia': 'id',
      'Iran': 'ir',
      'Iraq': 'iq',
      'Ireland': 'ie',
      'Isle Of Man': 'im',
      'Israel': 'il',
      'Italy': 'it',
      'Jamaica': 'jm',
      'Japan': 'jp',
      'Jersey': 'je',
      'Jordan': 'jo',
      'Kazakhstan': 'kz',
      'Kenya': 'ke',
      'Kiribati': 'ki',
      'Republic of Korea': 'kr',
      'South Korea': 'kr',
      "Democratic People's Republic of Korea": 'kp',
      'North Korea': 'kp',
      'Kuwait': 'kw',
      'Kyrgyzstan': 'kg',
      'Lao People\'s Democratic Republic': 'la',
      'Latvia': 'lv',
      'Lebanon': 'lb',
      'Lesotho': 'ls',
      'Liberia': 'lr',
      'Libyan Arab Jamahiriya': 'ly',
      'Liechtenstein': 'li',
      'Lithuania': 'lt',
      'Luxembourg': 'lu',
      'Macao': 'mo',
      'Macedonia': 'mk',
      'Madagascar': 'mg',
      'Malawi': 'mw',
      'Malaysia': 'my',
      'Maldives': 'mv',
      'Mali': 'ml',
      'Malta': 'mt',
      'Marshall Islands': 'mh',
      'Martinique': 'mq',
      'Mauritania': 'mr',
      'Mauritius': 'mu',
      'Mayotte': 'yt',
      'Mexico': 'mx',
      'Micronesia, Federated States Of': 'fm',
      'Moldova': 'md',
      'Monaco': 'mc',
      'Mongolia': 'mn',
      'Montenegro': 'me',
      'Montserrat': 'ms',
      'Morocco': 'ma',
      'Mozambique': 'mz',
      'Myanmar': 'mm',
      'Namibia': 'na',
      'Nauru': 'nr',
      'Nepal': 'np',
      'Netherlands': 'nl',
      'Netherlands Antilles': 'an',
      'New Caledonia': 'nc',
      'New Zealand': 'nz',
      'Nicaragua': 'ni',
      'Niger': 'ne',
      'Nigeria': 'ng',
      'Niue': 'nu',
      'Norfolk Island': 'nf',
      'Northern Mariana Islands': 'mp',
      'Norway': 'no',
      'Oman': 'om',
      'Pakistan': 'pk',
      'Palau': 'pw',
      'Palestinian Territory, Occupied': 'ps',
      'Panama': 'pa',
      'Papua New Guinea': 'pg',
      'Paraguay': 'py',
      'Peru': 'pe',
      'Philippines': 'ph',
      'Pitcairn': 'pn',
      'Poland': 'pl',
      'Portugal': 'pt',
      'Puerto Rico': 'pr',
      'Qatar': 'qa',
      'Reunion': 're',
      'Romania': 'ro',
      'Russia': 'ru',
      'Rwanda': 'rw',
      'Saint Barthelemy': 'bl',
      'Saint Helena': 'sh',
      'Saint Kitts And Nevis': 'kn',
      'Saint Lucia': 'lc',
      'Saint Martin': 'mf',
      'Saint Pierre And Miquelon': 'pm',
      'Saint Vincent And Grenadines': 'vc',
      'Samoa': 'ws',
      'San Marino': 'sm',
      'Sao Tome And Principe': 'st',
      'Saudi Arabia': 'sa',
      'Senegal': 'sn',
      'Serbia': 'rs',
      'Seychelles': 'sc',
      'Sierra Leone': 'sl',
      'Singapore': 'sg',
      'Slovakia': 'sk',
      'Slovenia': 'si',
      'Solomon Islands': 'sb',
      'Somalia': 'so',
      'South Africa': 'za',
      'South Georgia And Sandwich Isl.': 'gs',
      'Spain': 'es',
      'Sri Lanka': 'lk',
      'Sudan': 'sd',
      'Suriname': 'sr',
      'Svalbard And Jan Mayen': 'sj',
      'Swaziland': 'sz',
      'Sweden': 'se',
      'Switzerland': 'ch',
      'Syrian Arab Republic': 'sy',
      'Taiwan': 'tw',
      'Tajikistan': 'tj',
      'Tanzania': 'tz',
      'Thailand': 'th',
      'Timor-Leste': 'tl',
      'Togo': 'tg',
      'Tokelau': 'tk',
      'Tonga': 'to',
      'Trinidad And Tobago': 'tt',
      'Tunisia': 'tn',
      'Turkey': 'tr',
      'Turkmenistan': 'tm',
      'Turks And Caicos Islands': 'tc',
      'Tuvalu': 'tv',
      'Uganda': 'ug',
      'Ukraine': 'ua',
      'United Arab Emirates': 'ae',
      'United Kingdom': 'gb',
      'United States': 'us',
      'United States Outlying Islands': 'um',
      'Uruguay': 'uy',
      'Uzbekistan': 'uz',
      'Vanuatu': 'vu',
      'Venezuela': 've',
      'Vietnam': 'vn',
      'Virgin Islands, British': 'vg',
      'Virgin Islands, U.S.': 'vi',
      'Wallis And Futuna': 'wf',
      'Western Sahara': 'eh',
      'Yemen': 'ye',
      'Zambia': 'zm',
      'Zimbabwe': 'zw'
    };

    /**
     * change country name to country code
     */
    let getCountryCode = (countryName) => {
      if (isoCountries.hasOwnProperty(countryName)) {
        return isoCountries[countryName];
      } else {
        return countryName;
      }
    }

    /**
     * convert object elements to array
     */
    this.countryArray = Object.keys(obj).map((key) => {
      return [getCountryCode(key), Number(obj[key])];
    });

    this.countryArray.splice(0, 2);
    // console.log('this.this.countryArray', this.this.countryArray);

    this.chartOptions = {
      chart: {
        map: World_map
      },
      title: {
        text: 'COVID-19 Cases Across the World'
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: 'spacingBox'
        }
      },
      colorAxis: {
        min: 0
      },
      series: [{
        name: 'Confirmed Cases',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        },
        allAreas: true,
        data: this.countryArray
      }]
    };

  }

  ngOnInit() { }
}
