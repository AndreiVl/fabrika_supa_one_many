const loadData = (state) => {
	switch (state) {
		case "moscow":
			return JSON.stringify(moscow);
			break;

		case "st_petersburg":
			return JSON.stringify(st_petersburg);
			break;

		case "neftekamsk":
			return JSON.stringify(neftekamsk);
			break;

		case "zlatoust":
			return JSON.stringify(zlatoust);
			break;

		default:
			return JSON.stringify({ error: true });
	}
};

let moscow = {
	mataj_zelenyj_s_tofu: 249,
	mataj_krasnyj_s_govyadinoj: 269,
	mataj_zhyoltyj_s_kuricej: 249,
	to_yam_nam_kkhon_s_moreproduktami: 309,
	tom_yam_s_kuricej_i_gribami: 249,
	ma_po_s_tof: 259,
	fo_s_kuricej: 239,
	miso_s_gribami_shiitake: 239,
	lagman: 249,
	borshch_s_govyadinoj: 249,
	sup_lapsha_s_kuricej: 209,
	solyanka_sbornaya_myasnaya: 279,
	gruzinskij_harcho_s_govyadinoj: 269,
	indijskij_dal: 239,
	vengerskij_gulyash: 269,
	klem_chauder_s_midiyami: 269,
	nemeckij_pihelshtajner: 269,
	afrikanskij_orekhovyj_sup: 259,
	finskij_lohikejtto_s_semgoj: 299,
	tureckij_chechevichnyj_sup: 209
};

let st_petersburg = {
	mataj_zelenyj_s_tofu: 249,
	mataj_krasnyj_s_govyadinoj: 269,
	mataj_zhyoltyj_s_kuricej: 249,
	to_yam_nam_kkhon_s_moreproduktami: 309,
	tom_yam_s_kuricej_i_gribami: 249,
	ma_po_s_tof: 259,
	fo_s_kuricej: 239,
	miso_s_gribami_shiitake: 239,
	lagman: 249,
	borshch_s_govyadinoj: 249,
	sup_lapsha_s_kuricej: 209,
	solyanka_sbornaya_myasnaya: 279,
	gruzinskij_harcho_s_govyadinoj: 269,
	indijskij_dal: 239,
	vengerskij_gulyash: 269,
	klem_chauder_s_midiyami: 269,
	nemeckij_pihelshtajner: 269,
	afrikanskij_orekhovyj_sup: 259,
	finskij_lohikejtto_s_semgoj: 299,
	tureckij_chechevichnyj_sup: 209
};

let neftekamsk = {
	mataj_zelenyj_s_tofu: 209,
	mataj_krasnyj_s_govyadinoj: 229,
	mataj_zhyoltyj_s_kuricej: 209,
	to_yam_nam_kkhon_s_moreproduktami: 269,
	tom_yam_s_kuricej_i_gribami: 209,
	ma_po_s_tof: 219,
	fo_s_kuricej: 199,
	miso_s_gribami_shiitake: 199,
	lagman: 199,
	borshch_s_govyadinoj: 209,
	sup_lapsha_s_kuricej: 169,
	solyanka_sbornaya_myasnaya: 239,
	gruzinskij_harcho_s_govyadinoj: 219,
	indijskij_dal: 199,
	vengerskij_gulyash: 219,
	klem_chauder_s_midiyami: 229,
	nemeckij_pihelshtajner: 229,
	afrikanskij_orekhovyj_sup: 219,
	finskij_lohikejtto_s_semgoj: 249,
	tureckij_chechevichnyj_sup: 169
};

let zlatoust = {
	mataj_zelenyj_s_tofu: 209,
	mataj_krasnyj_s_govyadinoj: 229,
	mataj_zhyoltyj_s_kuricej: 209,
	to_yam_nam_kkhon_s_moreproduktami: 269,
	tom_yam_s_kuricej_i_gribami: 209,
	ma_po_s_tof: 219,
	fo_s_kuricej: 199,
	miso_s_gribami_shiitake: 199,
	lagman: 199,
	borshch_s_govyadinoj: 209,
	sup_lapsha_s_kuricej: 169,
	solyanka_sbornaya_myasnaya: 239,
	gruzinskij_harcho_s_govyadinoj: 219,
	indijskij_dal: 199,
	vengerskij_gulyash: 219,
	klem_chauder_s_midiyami: 229,
	nemeckij_pihelshtajner: 229,
	afrikanskij_orekhovyj_sup: 219,
	finskij_lohikejtto_s_semgoj: 249,
	tureckij_chechevichnyj_sup: 169
};

export default loadData;


