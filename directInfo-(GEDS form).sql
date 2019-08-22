create table opengeds_v2 (
	Surname VARCHAR(255),
	GivenName VARCHAR(255),
	Initials VARCHAR(255),
	Prefix_EN VARCHAR(255),
	Prefix_FR VARCHAR(255),
	Suffix_EN VARCHAR(255),
	Suffix_FR VARCHAR(255),
	Title_EN VARCHAR(255),
	Title_FR VARCHAR(255),
	TelephoneNumber VARCHAR(255),
	FaxNumber VARCHAR(255),
	TDDNumber VARCHAR(255),
	Email VARCHAR(255),
	StreetAddress_EN VARCHAR(255),
	StreetAddress_FR VARCHAR(255),
	Country_EN VARCHAR(255),
	Country_FR VARCHAR(255),
	Province_EN VARCHAR(255),
	Province_FR VARCHAR(255),
	City_EN VARCHAR(255),
	City_FR VARCHAR(255),
	PostalCode VARCHAR(255),
	DepartmentAcronym VARCHAR(255),
	DepartmentName_EN VARCHAR(255),
	DepartmentName_FR VARCHAR(255),
	OrganizationAcronym VARCHAR(255),
	OrganizationName_EN VARCHAR(255),
	OrganizationName_FR VARCHAR(255)
)


create table updatedate_v2(
	date TIMESTAMPTZ default now()
)

-- TABLE v1
create table opengeds (
	agofficialname VARCHAR(255),
	sn VARCHAR(255),
	gcprefixenglish VARCHAR(255),
	gctitleenglish VARCHAR(255),
	telephonenumber VARCHAR(255),
	mobile VARCHAR(255),
	email VARCHAR(255),
	agpostalstreetnumber VARCHAR(255),
	agpostalstreetnameenglish VARCHAR(255),
	agpostalbuildingunittypeenglish VARCHAR(255),
	agpostalbuildingunitid VARCHAR(255),
	gcpostofficeboxenglish VARCHAR(255),
	gccityenglish VARCHAR(255),
	gcprovincenameenglish VARCHAR(255),
	c VARCHAR(255),
	postalcode VARCHAR(255),
	gcbuildingnameenglish VARCHAR(255),
	agfloorenglish VARCHAR(255),
	agroomnumberenglish VARCHAR(255),
	agphysicalstreetnumber VARCHAR(255),
	agphysicalstreetnameenglish VARCHAR(255),
	agphysicalbuildingunittypeenglish VARCHAR(255),
	agphysicalbuildingunitid VARCHAR(255),
	agphysicalcityenglish VARCHAR(255),
	agphysicalprovincenameenglish VARCHAR(255)
)

create table updatedate(
	date TIMESTAMPTZ default now()
)
