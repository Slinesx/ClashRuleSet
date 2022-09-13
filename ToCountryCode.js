function operator(proxies) {
	const ISOFlags = {
        '🏴‍☠️': ['N/A', 'NA'],
        '🇸🇱': ['TEST', 'SOS'],
        '🇦🇩': ['AD', 'AND'],
        '🇦🇪': ['AE', 'ARE'],
        '🇦🇫': ['AF', 'AFG'],
        '🇦🇱': ['AL', 'ALB'],
        '🇦🇲': ['AM', 'ARM'],
        '🇦🇷': ['AR', 'ARG'],
        '🇦🇹': ['AT', 'AUT'],
        '🇦🇺': ['AU', 'AUS'],
        '🇦🇿': ['AZ', 'AZE'],
        '🇧🇦': ['BA', 'BIH'],
        '🇧🇩': ['BD', 'BGD'],
        '🇧🇪': ['BE', 'BEL'],
        '🇧🇬': ['BG', 'BGR'],
        '🇧🇭': ['BH', 'BHR'],
        '🇧🇷': ['BR', 'BRA'],
        '🇧🇾': ['BY', 'BLR'],
        '🇨🇦': ['CA', 'CAN'],
        '🇨🇭': ['CH', 'CHE'],
        '🇨🇱': ['CL', 'CHL'],
        '🇨🇴': ['CO', 'COL'],
        '🇨🇷': ['CR', 'CRI'],
        '🇨🇾': ['CY', 'CYP'],
        '🇨🇿': ['CZ', 'CZE'],
        '🇩🇪': ['DE', 'DEU'],
        '🇩🇯': ['DJ', 'DJI'],
        '🇩🇰': ['DK', 'DNK'],
        '🇩🇿': ['DZ', 'DZA'],
        '🇪🇨': ['EC', 'ECU'],
        '🇪🇪': ['EE', 'EST'],
        '🇪🇬': ['EG', 'EGY'],
        '🇪🇸': ['ES', 'ESP'],
        '🇫🇮': ['FI', 'FIN'],
        '🇫🇷': ['FR', 'FRA'],
        '🇬🇧': ['GB', 'GBR'],
        '🇬🇪': ['GE', 'GEO'],
        '🇬🇭': ['GH', 'GHA'],
        '🇬🇷': ['GR', 'GRC'],
        '🇭🇰': ['HK', 'HKG'],
        '🇭🇷': ['HR', 'HRV'],
        '🇭🇺': ['HU', 'HUN'],
        '🇯🇴': ['JO', 'JOR'],
        '🇯🇵': ['JP', 'JPN'],
        '🇰🇪': ['KE', 'KEN'],
        '🇰🇬': ['KG', 'KGZ'],
        '🇰🇭': ['KH', 'KGZ'],
        '🇰🇵': ['KP', 'PRK'],
        '🇰🇷': ['KR', 'KOR'],
        '🇰🇿': ['KZ', 'KAZ'],
        '🇮🇩': ['ID', 'IDN'],
        '🇮🇪': ['IE', 'IRL'],
        '🇮🇱': ['IL', 'ISR'],
        '🇮🇲': ['IM', 'IMN'],
        '🇮🇳': ['IN', 'IND'],
        '🇮🇷': ['IR', 'IRN'],
        '🇮🇸': ['IS', 'ISL'],
        '🇮🇹': ['IT', 'ITA'],
        '🇱🇹': ['LT', 'LTU'],
        '🇱🇺': ['LU', 'LUX'],
        '🇱🇻': ['LV', 'LVA'],
        '🇲🇦': ['MA', 'MAR'],
        '🇲🇩': ['MD', 'MDA'],
        '🇳🇬': ['NG', 'NGA'],
        '🇲🇰': ['MK', 'MKD'],
        '🇲🇳': ['MN', 'MNG'],
        '🇲🇴': ['MO', 'MAC'],
        '🇲🇹': ['MT', 'MLT'],
	'🇲🇺': ['MU', 'MUS'],
        '🇲🇽': ['MX', 'MEX'],
        '🇲🇾': ['MY', 'MYS'],
        '🇳🇱': ['NL', 'NLD'],
        '🇳🇴': ['NO', 'NOR'],
        '🇳🇵': ['NP', 'NPL'],
        '🇳🇿': ['NZ', 'NZL'],
        '🇵🇦': ['PA', 'PAN'],
        '🇵🇪': ['PE', 'PER'],
        '🇵🇭': ['PH', 'PHL'],
        '🇵🇰': ['PK', 'PAK'],
        '🇵🇱': ['PL', 'POL'],
        '🇵🇷': ['PR', 'PRI'],
        '🇵🇹': ['PT', 'PRT'],
        '🇵🇾': ['PY', 'PRY'],
        '🇷🇴': ['RO', 'ROU'],
        '🇷🇸': ['RS', 'SRB'],
        '🇷🇪': ['RE', 'REU'],
        '🇷🇺': ['RU', 'RUS'],
        '🇸🇦': ['SA', 'SAU'],
        '🇸🇪': ['SE', 'SWE'],
        '🇸🇬': ['SG', 'SGP'],
        '🇸🇮': ['SI', 'SVN'],
        '🇸🇰': ['SK', 'SVK'],
        '🇹🇭': ['TH', 'THA'],
        '🇹🇳': ['TN', 'TUN'],
        '🇹🇷': ['TR', 'TUR'],
        '🇹🇼': ['TW', 'TWN'],
        '🇺🇦': ['UA', 'UKR'],
        '🇺🇿': ['UZ', 'UZB'],
        '🇺🇸': ['US', 'USA'],
        '🇺🇾': ['UY', 'URY'],
        '🇻🇪': ['VE', 'VEN'],
        '🇻🇳': ['VN', 'VNM'],
        '🇿🇦': ['ZA', 'ZAF'],
        '🇨🇳': ['CN', 'CHN'],
    };
    const counter = {};
        return proxies.map(p => {
		var mt = p.name.match(/^[0-9]*(\.)*[0-9]*(?=X)/)?.[0] || "1"
		mt = parseFloat(mt)
		let warn = ''
		if (mt > 1){
		    warn = '  ⚠️'
		}
		let Flag = p.name.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/)?.[0] || '🏴‍☠️';
		if (Flag != '🏴‍☠️'){
			let keywords = ISOFlags[Flag][1];
			p.name = `${Flag} ${keywords}•|`;
                }
                if (!counter[p.name]) counter[p.name] = 0;       
                p.name = p.name + " " +(('000'+ ++counter[p.name]).slice(-2)).toString();
		p.name = p.name + warn
		return p;
	});
}
