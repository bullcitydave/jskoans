package com.blueprinttrader.server.model.dependency;

public enum State {

	ALABAMA("state.name.alabama", "state.abbr.AL"), ALASKA("state.name.alaska", "state.abbr.AK"), ARIZONA("state.name.arizona", "state.abbr.AZ"), ARKANSAS(
	"state.name.arkansas", "state.abbr.AR"), CALIFORNIA("state.name.california", "state.abbr.CA"), COLORADO("state.name.colorado", "state.abbr.CO"), CONNECTICUT(
	"state.abbr.connecticut", "state.abbr.CT"), DELAWARE("state.abbr.delaware", "state.abbr.DE"), DISTRICTOFCOLUMBIA("state.abbr.districtofcolumbia",
	"state.abbr.DC"), FLORIDA("state.name.florida", "state.abbr.FL"), GEORGIA("state.name.georgia", "state.abbr.GA"), HAWAII("state.name.hawaii",
	"state.abbr.HI"), IDAHO("state.name.idaho", "state.abbr.ID"), ILLINOIS("state.name.illinois", "state.abbr.IL"), INDIANA("state.name.indiana",
	"state.abbr.IN"), IOWA("state.name.iowa", "state.abbr.IA"), KANSAS("state.name.kansas", "state.abbr.KS"), KENTUCKY("state.name.kentucky",
	"state.abbr.KY"), LOUISIANA("state.name.louisiana", "state.abbr.LA"), MAINE("state.name.maine", "state.abbr.ME"), MARYLAND("state.name.maryland",
	"state.abbr.MD"), MASSACHUSETTS("state.name.massachusetts", "state.abbr.MA"), MICHIGAN("state.name.michigan", "state.abbr.MI"), MINNESOTA(
	"state.name.minnesota", "state.abbr.MN"), MISSISSIPPI("state.name.mississippi", "state.abbr.MS"), MISSOURI("state.name.missouri", "state.abbr.MO"), MONTANA(
	"state.name.montana", "state.abbr.MT"), NEBRASKA("state.name.nebraska", "state.abbr.NE"), NEVADA("state.name.nevada", "state.abbr.NV"), NEWHAMPSHIRE(
	"state.name.newhampshire", "state.abbr.NH"), NEWJERSEY("state.name.newjersey", "state.abbr.NJ"), NEWMEXICO("state.name.newmexico",
	"state.abbr.NM"), NEWYORK("state.name.newyork", "state.abbr.NY"), NORTHCAROLINA("state.name.northcarolina", "state.abbr.NC"), NORTHDAKOTA(
	"state.name.northdakota", "state.abbr.ND"), OHIO("state.name.ohio", "state.abbr.OH"), OKLAHOMA("state.name.oklahoma", "state.abbr.OK"), OREGON(
	"state.name.oregon", "state.abbr.OR"), PENNSYLVANIA("state.name.pennsylvania", "state.abbr.PA"), RHODEISLAND("state.name.rhodeisland",
	"state.abbr.RI"), SOUTHCAROLINA("state.name.southcarolina", "state.abbr.SC"), SOUTHDAKOTA("state.name.southdakota", "state.abbr.SD"), TENNESSEE(
	"state.name.tennessee", "state.abbr.TN"), TEXAS("state.name.texas", "state.abbr.TX"), UTAH("state.name.utah", "state.abbr.UT"), VERMONT(
	"state.name.vermont", "state.abbr.VT"), VIRGINIA("state.name.virginia", "state.abbr.VA"), WASHINGTON("state.name.washington", "state.abbr.WA"), WESTVIRGINIA(
	"state.name.westvirginia", "state.abbr.WV"), WISCONSIN("state.name.wisconsin", "state.abbr.WI"), WYOMING("state.name.wyoming", "state.abbr.WY");

	/**
	 * The state's lookupCode.
	 */
	private String lookupCode;

	/**
	 * The state's abbreviation.
	 */
	private String abbreviation;

	/**
	 * Constructs a new state.
	 * 
	 * @param lookupCode
	 *            the state's lookupCode.
	 * @param abbreviation
	 *            the state's abbreviation.
	 */
	State(String lookupCode, String abbreviation) {
		this.lookupCode = lookupCode;
		this.abbreviation = abbreviation;
	}

	/**
	 * Returns the state's abbreviation.
	 * 
	 * @return the state's abbreviation.
	 */
	public String getAbbreviation() {
		return abbreviation;
	}

	public String getLookupCode() {
		return lookupCode;
	}
}