import { AnimateSharedLayout, motion } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import ConnectionCard from '../components/connections/ConnectionCard'
import ConnectionModal from '../components/connections/ConnectionModal'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'


export async function getStaticProps() {
    const meta = {
        title: 'Certifications // Nirmit Khurana',
        tagline: 'Learn. Validate. Excel.',
        image: '/static/images/certifications-bw.jpg',
        primaryColor: 'purple',
        secondaryColor: 'cyan',
    }

    return { props: meta }
}
// Certification data with the structure you requested
const certifications = [
    // Completed Certifications
    {
        name: 'Tableau Desktop Qualified Associate Certification',
        title: 'Data Visualization',
        company: 'LinkedIn',
        status: 'Completed',
        tags: ['Tableau', 'Data Visualization', 'Analytics'],
        issued: '2025',
        certLink: 'https://www.linkedin.com/learning/tableau-essential-training-29553026/apply-the-power-of-tableau-2025-to-your-data',
        linkedInLink: 'https://www.linkedin.com/posts/nirmit-khurana-3852841a6_certificate-of-completion-activity-7284684579725033472-mfrD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYHRUBBd2D6cCsHdI-n7Fi2qO9HveZ1eM',
    },
    {
        name: 'Data Analytics Essentials',
        title: 'Data Analytics',
        company: 'CISCO',
        status: 'Completed',
        tags: ['Data Analytics', 'Networking', 'Fundamentals'],
        issued: '2025',
        certLink: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html',
        linkedInLink: 'https://www.linkedin.com/posts/nirmit-khurana-3852841a6_ref-dataanalytics-cisco-activity-7416505499124408320-namF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYHRUBBd2D6cCsHdI-n7Fi2qO9HveZ1eM',
    },
    {
        name: 'JIRA Project Management',
        title: 'Project Management',
        company: 'GreatLearning',
        status: 'Completed',
        tags: ['JIRA', 'Project Management', 'Agile'],
        issued: '2025',
        certLink: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/jira-project-management',
        linkedInLink: 'https://www.linkedin.com/posts/nirmit-khurana-3852841a6_70dayhard-70dayhard-70dayhard-activity-7415425878009999360-JScv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYHRUBBd2D6cCsHdI-n7Fi2qO9HveZ1eM',
    },
    {
        name: 'Introduction to Programming Using Python',
        title: 'Programming',
        company: 'HackerRank',
        status: 'Completed',
        tags: ['Python', 'Programming', 'Coding'],
        issued: '2025',
        certLink: 'https://www.hackerrank.com/skills-verification',
        linkedInLink: null,
    },
    {
        name: 'Introduction to Data Analytics',
        title: 'Data Analytics',
        company: 'SimpliLearning',
        status: 'Completed',
        tags: ['Data Analytics', 'Fundamentals', 'Introduction'],
        issued: '2025',
        certLink: 'https://www.simplilearn.com/learn-data-analytics-for-beginners-skillup?term=data',
        linkedInLink: 'https://www.linkedin.com/posts/nirmit-khurana-3852841a6_70dayhard-70dayhard-businessimpact-activity-7414697327178706944-svak?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAYHRUBBd2D6cCsHdI-n7Fi2qO9HveZ1eM',
    },
    // In Progress
    {
        name: 'IBM Data Science Professional',
        title: 'Data Science',
        company: 'IBM',
        status: 'In Progress',
        tags: ['Python', 'Machine Learning', 'Data Science'],
        issued: 'Expected 2026',
        certLink: 'https://www.coursera.org/professional-certificates/ibm-data-science',
        linkedInLink: null,
    },
    // To Be Done
    {
        name: 'Microsoft Power BI Certificate (PL-300)',
        title: 'Business Intelligence',
        company: 'Microsoft',
        status: 'To Be Done',
        tags: ['Power BI', 'DAX', 'Data Modeling'],
        issued: 'Expected 2026',
        certLink: 'https://learn.microsoft.com/en-us/certifications/exams/pl-300/',
        linkedInLink: null,
    },
    {
        name: 'Google Data Analytics Professional Certificate',
        title: 'Data Analytics',
        company: 'Google (Coursera)',
        status: 'To Be Done',
        tags: ['SQL', 'Tableau', 'Data Analysis', 'R'],
        issued: 'Expected 2026',
        certLink: 'https://www.coursera.org/professional-certificates/google-data-analytics',
        linkedInLink: null,
    },
    {
        name: 'Microsoft Azure Data Scientist Associate (DP-100)',
        title: 'Cloud Data Science',
        company: 'Microsoft',
        status: 'To Be Done',
        tags: ['Azure', 'Machine Learning', 'Cloud'],
        issued: 'Expected 2026',
        certLink: 'https://learn.microsoft.com/en-us/certifications/exams/dp-100/',
        linkedInLink: null,
    },
]

function Certifications() {
    const [selectedCert, setSelectedCert] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredCertifications = certifications.filter(
        cert =>
            cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cert.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cert.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleCardClick = cert => {
        setSelectedCert(cert)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedCert(null)
    }

    const description = `My professional certifications that validate my expertise in <strong>Data Analytics</strong>, <strong>Business Intelligence</strong>, and related technologies. Certifications are marked as "Completed", "In Progress", or "To Be Done".`

    return (
        <>
            <Head>
                <title>Certifications // Nirmit Khurana</title>
                <meta content="Certifications // Nirmit Khurana" property="og:title" />
                <meta
                    content="Professional certifications and credentials in Data Analytics and Business Intelligence."
                    name="description"
                />
                <meta
                    content="Professional certifications and credentials in Data Analytics and Business Intelligence."
                    property="og:description"
                />
                <meta content="https://nirmitkhurana.com/certifications" property="og:url" />
                <meta
                    content="https://nirmitkhurana.com/static/images/certifications-bw.jpg"
                    property="og:image"
                />
            </Head>

            <AnimateSharedLayout>
                <p dangerouslySetInnerHTML={{ __html: description }} />

                <SectionHeader>Certifications</SectionHeader>
                <SearchInput
                    type="text"
                    placeholder="Search by name, issuer, or category..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <CertificationsGrid>
                    {filteredCertifications.length > 0 ? (
                        filteredCertifications.map((cert, idx) => (
                            <motion.div
                                key={cert.name + idx}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: idx * 0.08,
                                    duration: 0.5,
                                    type: 'spring',
                                    stiffness: 60,
                                }}
                            >
                                <ConnectionCard
                                    person={cert}
                                    onClick={() => handleCardClick(cert)}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <NoResults>No certifications found.</NoResults>
                    )}
                </CertificationsGrid>
            </AnimateSharedLayout>
            <ConnectionModal
                person={selectedCert}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}

const CertificationsGrid = styled('div', {
    display: 'grid',
    margin: '10px 0 0 -20px',
    gridTemplateColumns: 'repeat(4, 1fr)',

    '@media (max-width: 600px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        margin: '10px 0 0 0',
    },
})

const SearchInput = styled('input', {
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    margin: '20px 0',
    border: '1px solid $secondary',
    borderRadius: '$borderRadius',
    backgroundColor: '$background',
    color: '$primary',
    fontSize: '16px',
    '&::placeholder': {
        color: '$secondary',
    },
    '&:focus': {
        outline: 'none',
        borderColor: '$cyan',
    },
    '@media (max-width: 600px)': {
        fontSize: '15px',
        padding: '10px 8px',
    },
})

const SectionHeader = styled('h2', {
    fontSize: '28px',
    fontWeight: '600',
    color: '$primary',
    marginTop: '40px',
    marginBottom: '30px',
})

const NoResults = styled('div', {
    color: '$secondary',
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '40px',
})

Certifications.Layout = Base

export default Certifications
