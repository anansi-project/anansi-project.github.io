import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'OPDS Page Streaming Extension',
        image: '/img/book.svg',
        description: (
            <>
                An unofficial OPDS extension allowing applications to stream pages without having to download whole files.
            </>
        ),
    },
    {
        title: 'ComicInfo Metadata',
        image: '/img/xml-document.svg',
        description: (
            <>
                Documentation about ComicRack's ubiquitous metadata format, as well as centralized discussions about its evolution.
            </>
        ),
    },
    {
        title: 'Future Metadata Model',
        image: '/img/server-data.svg',
        description: (
            <>
                A new metadata model and container format for Comic Books, Mangas and other graphic novels.
            </>
        ),
    },
]

function Feature ({ title, image, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            {/*<div className="text--center">*/}
            {/*    <img className={styles.featureSvg} alt={title} src={image}/>*/}
            {/*</div>*/}
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures (): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
