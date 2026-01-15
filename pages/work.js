import { differenceInMonths, format, parseISO } from 'date-fns'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import WorkTimeline from '../components/work/WorkTimeline'
import WorkModal from '../components/work/WorkModal'
import items from '../data/work'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'

export async function getStaticProps() {
  const meta = {
    title: 'Work // Nirmit Khurana',
    tagline: 'Analyze. Transform. Deliver.',
    image: '/static/images/work-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function Work(props) {
  const getDuration = (start, end) => {
    const startDate = parseISO(start)
    const endDate = end && end !== 'Present' ? parseISO(end) : new Date()
    const months = differenceInMonths(endDate, startDate)
    const decimalYears = Math.ceil((months / 12) * 10) / 10

    if (decimalYears >= 1) {
      return `${decimalYears.toFixed(1)} yr${decimalYears !== 1 ? 's' : ''}`
    }
    return `${months + 1} mos`
  }

  const { title, image } = props
  const description = `My journey with Big Data began in 2022, and I instantly fell in love with <strong>Data Engineering</strong>. Since then, I've dedicated myself to working with data at every opportunity, accumulating <strong>${items.length} stints</strong> of hands-on experience transforming raw data into actionable insights.`

  const [selectedWork, setSelectedWork] = useState(null)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://nirmitkhurana.com/work" property="og:url" />
        <meta content={`https://nirmitkhurana.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <SectionHeader>Work Experience</SectionHeader>

        <TimelineContainer>
          {items.map((work, index) => (
            <WorkTimeline
              key={index}
              work={work}
              index={index}
              getDuration={getDuration}
              onClick={() => setSelectedWork(work)}
            />
          ))}
        </TimelineContainer>
      </AnimateSharedLayout>

      <WorkModal
        work={selectedWork}
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
        getDuration={getDuration}
      />
    </>
  )
}

const SectionHeader = styled('h2', {
  fontSize: '28px',
  fontWeight: '600',
  color: '$primary',
  marginTop: '40px',
  marginBottom: '30px',
})

const TimelineContainer = styled('div', {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '20px 0',
})

Work.Layout = Base

export default Work
