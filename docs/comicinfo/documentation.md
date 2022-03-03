---
sidebar_position: 2
title: Schema documentation
---

This page aims at clarifying the various elements of the schema, as well as their intended use and observed ussage.

### Title

Title of the book.

### Series

Title of the series the book is part of.

### SeriesSort

Sorting title of the series the book is part of. ie) "Batman" instead of Series "The Batman"

### Number

Number of the book in the series.

### Count

The total number of books in the series.

### Volume

Volume containing the book. Volume is a notion that is specific to US Comics, where the same series can have multiple volumes. Volumes can be referenced by numer (1, 2, 3…) or by year (2018, 2020…).

### AlternateSeries / AlternateNumber / AlternateCount

Quite specific to US comics, some books can be part of cross-over story arcs. Those fields can be used to specify an alternate series, its number and count of books.

### Summary

A description or summary of the book.

### Notes

A free text field, usually used to store information about the application that created the `ComicInfo.xml` file.

### Year / Month / Day

Usually contains the release date of the book.

### Creator fields

According to the schema, each creator element can only be present once. In order to cater for multiple creator with the same role, it is accepted that values are comma separated.

#### Writer

Person or organization responsible for creating the scenario.

#### Penciller

Person or organization responsible for drawing the art.

#### Inker

Person or organization responsible for inking the pencil art.

#### Colorist

Person or organization responsible for applying color to drawings.

#### Letterer

Person or organization responsible for drawing text and speech bubbles.

#### CoverArtist

Person or organization responsible for drawing the cover art.

#### Editor

A person or organization contributing to a resource by revising or elucidating the content, e.g., adding an introduction, notes, or other critical matter. An editor may also prepare a resource for production, publication, or distribution.

#### Translator

A person or organization who renders a text from one language into another, or from an older form of a language into the modern form.

This can also be used for fan translations ("scanlator"). 

### Publisher

A person or organization responsible for publishing, releasing, or issuing a resource.

### Imprint

An imprint is a group of publications under the umbrella of a larger imprint or a Publisher. For example, Vertigo is an Imprint of DC Comics.

### Genre

Genre of the book or series. For example, _Science-Fiction_ or _Shonen_.

It is accepted that multiple values are comma separated.

### Tags

Tags of the book or series. For example, _ninja_ or _school life_.

It is accepted that multiple values are comma separated.

### Web

A URL pointing to a reference website for the book.

### PageCount

The number of pages in the book.

### LanguageISO

A language code describing the language of the book.

Without any information on what kind of code this element is supposed to contain, it is recommended to use the [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag), which can describe the language but also the script used. This helps to differentiate languages with multiple scripts, like Traditional and Simplified Chinese.