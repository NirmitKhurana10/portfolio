import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'

export async function getStaticProps() {
    const meta = {
        title: 'Certifications // Nirmit Khurana',
        description:
            'Professional certifications and credentials in Data Analytics and Business Intelligence.',
        tagline: 'Certifications & Credentials',
        image: '/static/images/certifications-bw.jpg',
        primaryColor: 'purple',
        secondaryColor: 'blue',
    }

    return { props: meta }
}

// Sample certification data - you can replace with real data later
const certifications = [
    {
        id: 1,
        name: 'Microsoft Certified: Data Analyst Associate',
        issuer: 'Microsoft',
        date: 'January 2024',
        image: '/static/images/cert-placeholder.jpg',
    },
    {
        id: 2,
        name: 'Google Data Analytics Professional Certificate',
        issuer: 'Google',
        date: 'December 2023',
        image: '/static/images/cert-placeholder.jpg',
    },
    {
        id: 3,
        name: 'Tableau Desktop Specialist',
        issuer: 'Tableau',
        date: 'November 2023',
        image: '/static/images/cert-placeholder.jpg',
    },
]

function Certifications() {
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

            <Container>
                <h1>Certifications & Credentials</h1>
                <Description>
                    Professional certifications that validate my expertise in data analytics, business intelligence, and related technologies.
                </Description>

                <CertificationsList>
                    {certifications.map((cert) => (
                        <CertificationItem key={cert.id}>
                            <CertImageWrapper>
                                <CertImagePlaceholder>
                                    <CertIcon className="ri-award-fill" />
                                </CertImagePlaceholder>
                            </CertImageWrapper>
                            <CertDetails>
                                <CertName>{cert.name}</CertName>
                                <CertMeta>
                                    <CertIssuer>{cert.issuer}</CertIssuer>
                                    <CertDate>• {cert.date}</CertDate>
                                </CertMeta>
                            </CertDetails>
                        </CertificationItem>
                    ))}
                </CertificationsList>
            </Container>
        </>
    )
}

const Container = styled('div', {
    marginTop: '60px',
    maxWidth: '900px',
    margin: '60px auto 0',
    padding: '0 20px',
})

const Description = styled('p', {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '$secondary',
    marginBottom: '40px',
})

const CertificationsList = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
})

const CertificationItem = styled('div', {
    display: 'flex',
    gap: '24px',
    padding: '20px',
    background: '$hover',
    borderRadius: '$borderRadius',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',

    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    },

    '@bp1': {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
})

const CertImageWrapper = styled('div', {
    flexShrink: 0,
})

const CertImagePlaceholder = styled('div', {
    width: '120px',
    height: '120px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@bp1': {
        width: '100px',
        height: '100px',
    },
})

const CertIcon = styled('i', {
    fontSize: '48px',
    color: 'white',
    opacity: 0.9,
})

const CertDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
})

const CertName = styled('h3', {
    fontSize: '20px',
    fontWeight: 600,
    margin: '0 0 8px 0',
    color: '$primary',

    '@bp1': {
        fontSize: '18px',
    },
})

const CertMeta = styled('div', {
    display: 'flex',
    gap: '8px',
    fontSize: '14px',
    color: '$secondary',

    '@bp1': {
        flexDirection: 'column',
        gap: '4px',
    },
})

const CertIssuer = styled('span', {
    fontWeight: 500,
})

const CertDate = styled('span', {
    '@bp1': {
        '&::before': {
            content: 'none',
        },
    },
})

Certifications.Layout = Base

export default Certifications
