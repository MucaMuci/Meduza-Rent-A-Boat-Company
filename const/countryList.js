const countryList = [
    { value: "Albania", label: "Albania" },
    { value: "Åland Islands", label: "Åland Islands" },
    { value: "Algeria", label: "Algeria" },
    { value: "American Samoa", label: "American Samoa" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Anguilla", label: "Anguilla" },
    { value: "Antarctica", label: "Antarctica" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Aruba", label: "Aruba" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bonaire, Sint Eustatius and Saba", label: "Bonaire" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Bouvet Island", label: "Bouvet Island" },
    { value: "Brazil", label: "Brazil" },
    { value: "British Indian Ocean Territory", label: "British Indian Ocean Territory" },
    { value: "Brunei Darussalam", label: "Brunei Darussalam" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cabo Verde", label: "Cabo Verde" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Cayman Islands", label: "Cayman Islands" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Christmas Island", label: "Christmas Island" },
    { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo", label: "Congo" },
    { value: "Cook Islands", label: "Cook Islands" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Curaçao", label: "Curaçao" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czechia", label: "Czechia" },
    { value: "Côte d'Ivoire", label: "Côte d'Ivoire" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Eswatini", label: "Eswatini" },
    { value: "Ethiopia", label: "Ethiopia" },
    { value: "Falkland Islands", label: "Falkland Islands" },
    { value: "Faroe Islands", label: "Faroe Islands" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "French Guiana", label: "French Guiana" },
    { value: "French Polynesia", label: "French Polynesia" },
    { value: "French Southern Territories", label: "French Southern Territories" },
    { value: "Gabon", label: "Gabon" },
    { value: "Gambia", label: "Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Gibraltar", label: "Gibraltar" },
    { value: "Greece", label: "Greece" },
    { value: "Greenland", label: "Greenland" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guadeloupe", label: "Guadeloupe" },
    { value: "Guam", label: "Guam" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guernsey", label: "Guernsey" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    { value: "Heard Island and McDonald Islands", label: "Heard Island and McDonald Islands" },
    { value: "Holy See", label: "Holy See" },
    { value: "Honduras", label: "Honduras" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran", label: "Iran" },
    { value: "Iraq", label: "IQ" },
    { value: "Ireland", label: "IE" },
    { value: "Isle of Man", label: "IM" },
    { value: "Israel", label: "IL" },
    { value: "Italy", label: "IT" },
    { value: "Jamaica", label: "JM" },
    { value: "Japan", label: "JP" },
    { value: "Jersey", label: "JE" },
    { value: "Jordan", label: "JO" },
    { value: "Kazakhstan", label: "KZ" },
    { value: "Kenya", label: "KE" },
    { value: "Kiribati", label: "KI" },
    { value: "Korea (the Democratic People's Republic of)", label: "KP" },
    { value: "Korea (the Republic of)", label: "KR" },
    { value: "Kuwait", label: "KW" },
    { value: "Kyrgyzstan", label: "KG" },
    { value: "Lao People's Democratic Republic (the)", label: "LA" },
    { value: "Latvia", label: "LV" },
    { value: "Lebanon", label: "LB" },
    { value: "Lesotho", label: "LS" },
    { value: "Liberia", label: "LR" },
    { value: "Libya", label: "LY" },
    { value: "Liechtenstein", label: "LI" },
    { value: "Lithuania", label: "LT" },
    { value: "Luxembourg", label: "LU" },
    { value: "Macao", label: "MO" },
    { value: "Madagascar", label: "MG" },
    { value: "Malawi", label: "MW" },
    { value: "Malaysia", label: "MY" },
    { value: "Maldives", label: "MV" },
    { value: "Mali", label: "ML" },
    { value: "Malta", label: "MT" },
    { value: "Marshall Islands (the)", label: "MH" },
    { value: "Martinique", label: "MQ" },
    { value: "Mauritania", label: "MR" },
    { value: "Mauritius", label: "MU" },
    { value: "Mayotte", label: "YT" },
    { value: "Mexico", label: "MX" },
    { value: "Micronesia (Federated States of)", label: "FM" },
    { value: "Moldova (the Republic of)", label: "MD" },
    { value: "Monaco", label: "MC" },
    { value: "Mongolia", label: "MN" },
    { value: "Montenegro", label: "ME" },
    { value: "Montserrat", label: "MS" },
    { value: "Morocco", label: "MA" },
    { value: "Mozambique", label: "MZ" },
    { value: "Myanmar", label: "MM" },
    { value: "Namibia", label: "NA" },
    { value: "Nauru", label: "NR" },
    { value: "Nepal", label: "NP" },
    { value: "Netherlands (the)", label: "NL" },
    { value: "New Caledonia", label: "NC" },
    { value: "New Zealand", label: "NZ" },
    { value: "Nicaragua", label: "NI" },
    { value: "Niger (the)", label: "NE" },
    { value: "Nigeria", label: "NG" },
    { value: "Niue", label: "NU" },
    { value: "Norfolk Island", label: "NF" },
    { value: "Northern Mariana Islands (the)", label: "MP" },
    { value: "Norway", label: "NO" },
    { value: "Oman", label: "OM" },
    { value: "Pakistan", label: "PK" },
    { value: "Palau", label: "PW" },
    { value: "Palestine, State of", label: "PS" },
    { value: "Panama", label: "PA" },
    { value: "Papua New Guinea", label: "PG" },
    { value: "Paraguay", label: "PY" },
    { value: "Peru", label: "PE" },
    { value: "Philippines (the)", label: "PH" },
    { value: "Pitcairn", label: "PN" },
    { value: "Poland", label: "PL" },
    { value: "Portugal", label: "PT" },
    { value: "Puerto Rico", label: "PR" },
    { value: "Qatar", label: "QA" },
    { value: "Republic of North Macedonia", label: "MK" },
    { value: "Romania", label: "RO" },
    { value: "Russian Federation (the)", label: "RU" },
    { value: "Rwanda", label: "RW" },
    { value: "Réunion", label: "RE" },
    { value: "Saint Barthélemy", label: "BL" },
    { value: "Saint Helena, Ascension and Tristan da Cunha", label: "SH" },
    { value: "Saint Kitts and Nevis", label: "KN" },
    { value: "Saint Lucia", label: "LC" },
    { value: "Saint Martin (French part)", label: "MF" },
    { value: "Saint Pierre and Miquelon", label: "PM" },
    { value: "Saint Vincent and the Grenadines", label: "VC" },
    { value: "Samoa", label: "WS" },
    { value: "San Marino", label: "SM" },
    { value: "Sao Tome and Principe", label: "ST" },
    { value: "Saudi Arabia", label: "SA" },
    { value: "Senegal", label: "SN" },
    { value: "Serbia", label: "RS" },
    { value: "Seychelles", label: "SC" },
    { value: "Sierra Leone", label: "SL" },
    { value: "Singapore", label: "SG" },
    { value: "Sint Maarten (Dutch part)", label: "SX" },
    { value: "Slovakia", label: "SK" },
    { value: "Slovenia", label: "SI" },
    { value: "Solomon Islands", label: "SB" },
    { value: "Somalia", label: "SO" },
    { value: "South Africa", label: "ZA" },
    { value: "South Georgia and the South Sandwich Islands", label: "GS" },
    { value: "South Sudan", label: "SS" },
    { value: "Spain", label: "ES" },
    { value: "Sri Lanka", label: "LK" },
    { value: "Sudan (the)", label: "SD" },
    { value: "Survalue", label: "SR" },
    { value: "Svalbard and Jan Mayen", label: "SJ" },
    { value: "Sweden", label: "SE" },
    { value: "Switzerland", label: "CH" },
    { value: "Syrian Arab Republic", label: "SY" },
    { value: "Taiwan (Province of China)", label: "TW" },
    { value: "Tajikistan", label: "TJ" },
    { value: "Tanzania, United Republic of", label: "TZ" },
    { value: "Thailand", label: "TH" },
    { value: "Timor-Leste", label: "TL" },
    { value: "Togo", label: "TG" },
    { value: "Tokelau", label: "TK" },
    { value: "Tonga", label: "TO" },
    { value: "Trinidad and Tobago", label: "TT" },
    { value: "Tunisia", label: "TN" },
    { value: "Turkey", label: "TR" },
    { value: "Turkmenistan", label: "TM" },
    { value: "Turks and Caicos Islands (the)", label: "TC" },
    { value: "Tuvalu", label: "TV" },
    { value: "Uganda", label: "UG" },
    { value: "Ukraine", label: "UA" },
    { value: "United Arab Emirates (the)", label: "AE" },
    { value: "United Kingdom of Great Britain and Northern Ireland (the)", label: "GB" },
    { value: "United States Minor Outlying Islands (the)", label: "UM" },
    { value: "United States of America (the)", label: "US" },
    { value: "Uruguay", label: "UY" },
    { value: "Uzbekistan", label: "UZ" },
    { value: "Vanuatu", label: "VU" },
    { value: "Venezuela (Bolivarian Republic of)", label: "VE" },
    { value: "Viet Nam", label: "VN" },
    { value: "Virgin Islands (British)", label: "VG" },
    { value: "Virgin Islands (U.S.)", label: "VI" },
    { value: "Wallis and Futuna", label: "WF" },
    { value: "Western Sahara", label: "EH" },
    { value: "Yemen", label: "YE" },
    { value: "Zambia", label: "ZM" },
    { value: "Zimbabwe", label: "ZW" }
]

export default countryList