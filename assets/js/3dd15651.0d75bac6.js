"use strict";(self.webpackChunkanansi_website=self.webpackChunkanansi_website||[]).push([[749],{5638:function(e,n,s){s.r(n),s.d(n,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return x},toc:function(){return o}});var t=s(7462),a=s(3366),m=(s(7294),s(3905)),i=s(9055),r=["components"],c={sidebar_position:29,title:"Version 2.0"},u=void 0,x={unversionedId:"comicinfo/schemas/v2.0",id:"comicinfo/schemas/v2.0",title:"Version 2.0",description:"Source on GitHub",source:"@site/docs/comicinfo/schemas/v2.0.md",sourceDirName:"comicinfo/schemas",slug:"/comicinfo/schemas/v2.0",permalink:"/docs/comicinfo/schemas/v2.0",editUrl:"https://github.com/anansi-project/anansi-project.github.io/edit/main/website/docs/comicinfo/schemas/v2.0.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,title:"Version 2.0"},sidebar:"sidebar",previous:{title:"Version 2.1 (Draft)",permalink:"/docs/comicinfo/schemas/v2.1"},next:{title:"Version 1.0",permalink:"/docs/comicinfo/schemas/v1.0"}},o=[],l={toc:o};function p(e){var n=e.components,s=(0,a.Z)(e,r);return(0,m.kt)("wrapper",(0,t.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://github.com/anansi-project/comicinfo/blob/main/schema/v2.0/ComicInfo.xsd"},"Source")," on GitHub"),(0,m.kt)(i.Z,{className:"language-xml",mdxType:"CodeBlock"},'<?xml version="1.0" encoding="utf-8"?>\n<xs:schema elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">\n    <xs:element name="ComicInfo" nillable="true" type="ComicInfo" />\n    <xs:complexType name="ComicInfo">\n        <xs:sequence>\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Title" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Series" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Number" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="-1" name="Count" type="xs:int" />\n            <xs:element minOccurs="0" maxOccurs="1" default="-1" name="Volume" type="xs:int" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="AlternateSeries" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="AlternateNumber" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="-1" name="AlternateCount" type="xs:int" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Summary" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Notes" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="-1" name="Year" type="xs:int" />\n            <xs:element minOccurs="0" maxOccurs="1" default="-1" name="Month" type="xs:int" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Writer" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Penciller" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Inker" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Colorist" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Letterer" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="CoverArtist" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Editor" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Publisher" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Imprint" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Genre" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Web" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="0" name="PageCount" type="xs:int" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="LanguageISO" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Format" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="Unknown" name="BlackAndWhite" type="YesNo" />\n            <xs:element minOccurs="0" maxOccurs="1" default="Unknown" name="Manga" type="Manga" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Characters" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Teams" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="Locations" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="ScanInformation" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="StoryArc" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="" name="SeriesGroup" type="xs:string" />\n            <xs:element minOccurs="0" maxOccurs="1" default="Unknown" name="AgeRating" type="AgeRating" />\n            <xs:element minOccurs="0" maxOccurs="1" name="Pages" type="ArrayOfComicPageInfo" />\n        </xs:sequence>\n    </xs:complexType>\n    <xs:simpleType name="YesNo">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="Unknown" />\n            <xs:enumeration value="No" />\n            <xs:enumeration value="Yes" />\n        </xs:restriction>\n    </xs:simpleType>\n    <xs:simpleType name="Manga">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="Unknown" />\n            <xs:enumeration value="No" />\n            <xs:enumeration value="Yes" />\n            <xs:enumeration value="YesAndRightToLeft" />\n        </xs:restriction>\n    </xs:simpleType>\n    <xs:simpleType name="AgeRating">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="Unknown" />\n            <xs:enumeration value="Adults Only 18+" />\n            <xs:enumeration value="Early Childhood" />\n            <xs:enumeration value="Everyone" />\n            <xs:enumeration value="Everyone 10+" />\n            <xs:enumeration value="G" />\n            <xs:enumeration value="Kids to Adults" />\n            <xs:enumeration value="M" />\n            <xs:enumeration value="MA 15+" />\n            <xs:enumeration value="Mature 17+" />\n            <xs:enumeration value="PG" />\n            <xs:enumeration value="R18+" />\n            <xs:enumeration value="Rating Pending" />\n            <xs:enumeration value="Teen" />\n            <xs:enumeration value="X18+" />\n        </xs:restriction>\n    </xs:simpleType>\n    <xs:complexType name="ArrayOfComicPageInfo">\n        <xs:sequence>\n            <xs:element minOccurs="0" maxOccurs="unbounded" name="Page" nillable="true" type="ComicPageInfo" />\n        </xs:sequence>\n    </xs:complexType>\n    <xs:complexType name="ComicPageInfo">\n        <xs:attribute name="Image" type="xs:int" use="required" />\n        <xs:attribute default="Story" name="Type" type="ComicPageType" />\n        <xs:attribute default="false" name="DoublePage" type="xs:boolean" />\n        <xs:attribute default="0" name="ImageSize" type="xs:long" />\n        <xs:attribute default="" name="Key" type="xs:string" />\n        <xs:attribute default="-1" name="ImageWidth" type="xs:int" />\n        <xs:attribute default="-1" name="ImageHeight" type="xs:int" />\n    </xs:complexType>\n    <xs:simpleType name="ComicPageType">\n        <xs:list>\n            <xs:simpleType>\n                <xs:restriction base="xs:string">\n                    <xs:enumeration value="FrontCover" />\n                    <xs:enumeration value="InnerCover" />\n                    <xs:enumeration value="Roundup" />\n                    <xs:enumeration value="Story" />\n                    <xs:enumeration value="Advertisment" />\n                    <xs:enumeration value="Editorial" />\n                    <xs:enumeration value="Letters" />\n                    <xs:enumeration value="Preview" />\n                    <xs:enumeration value="BackCover" />\n                    <xs:enumeration value="Other" />\n                    <xs:enumeration value="Deleted" />\n                </xs:restriction>\n            </xs:simpleType>\n        </xs:list>\n    </xs:simpleType>\n</xs:schema>\n'))}p.isMDXComponent=!0}}]);