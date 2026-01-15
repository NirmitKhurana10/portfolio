import Head from 'next/head'
import React from 'react'
import categories from '../data/skills'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { motion } from 'framer-motion'
import { styled } from '../stitches.config'

export async function getStaticProps() {
    const meta = {
        title: 'Skills // Nirmit Khurana',
        description:
            "A comprehensive overview of my <strong>technical skills</strong> and <strong>professional competencies</strong> in Data Analytics, Business Intelligence, and Data Engineering.",
        tagline: 'Analyze. Transform. Deliver.',
        image: '/static/images/skills-bw.jpg',
        primaryColor: 'cyan',
        secondaryColor: 'green',
    }

    return { props: meta }
}

function Skills(props) {
    const { title, description, image } = props

    const renderAll = () => {
        return categories.map((category, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 60,
                }}
            >
                <CategorySection>
                    <CategoryHeader>{category.name}</CategoryHeader>
                    <CategoryDescription>{category.description}</CategoryDescription>
                    <SkillsList>
                        {category.skills.map((skill, iIndex) => (
                            <motion.li
                                key={iIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: iIndex * 0.03,
                                    duration: 0.3,
                                }}
                                dangerouslySetInnerHTML={{ __html: skill }}
                            />
                        ))}
                    </SkillsList>
                </CategorySection>
            </motion.div>
        ))
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={title} property="og:title" />
                <meta content={stripHtml(description)} name="description" />
                <meta content={stripHtml(description)} property="og:description" />
                <meta content="https://nirmitkhurana.com/skills" property="og:url" />
                <meta content={`https://nirmitkhurana.com${image}`} property="og:image" />
            </Head>

            <p dangerouslySetInnerHTML={{ __html: description }} />

            {renderAll()}
        </>
    )
}

const CategorySection = styled('div', {
    marginBottom: '50px',

    '&:last-child': {
        marginBottom: '20px',
    },
})

const CategoryHeader = styled('h2', {
    fontSize: '28px',
    fontWeight: '600',
    color: '$primary',
    marginBottom: '12px',
    marginTop: '50px',

    '&:first-of-type': {
        marginTop: '30px',
    },
})

const CategoryDescription = styled('p', {
    fontSize: '16px',
    color: '$secondary',
    marginTop: '8px',
    marginBottom: '20px',
    fontStyle: 'italic',
})

const SkillsList = styled('ul', {
    listStyleType: 'disc',
    paddingLeft: '24px',
    margin: '20px 0 0 0',

    '& li': {
        marginBottom: '12px',
        lineHeight: '1.7',
        color: '$secondary',
        fontSize: '15px',

        '& strong': {
            color: '$primary',
            fontWeight: 600,
        },
    },
})

Skills.Layout = Base

export default Skills
