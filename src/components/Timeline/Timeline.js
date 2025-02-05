import './Timeline.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Timeline() {
  return (
    <section className='section parcours' id='parcours'>
      <h2 className='section__title'>Parcours</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Mars 2024 - Aujourd'hui"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>
            Alternance Développeur Web
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Technicentre Industriel SNCF, Saint-Pierre-des-Corps
          </h4>
          <p>
            Développement d&rsquo;applications pour les chaînes de production au
            sein du Pôle Méthode. Travail sur Angular
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date="Mars 2024 - Aujourd'hui"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>
            Formation Développeur Web
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Niveau 5 (Bac +2)
          </h4>
          <p>
            Formation réalisée à distance et en alternance avec Openclassrooms
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018-2020'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>
            Master d&rsquo;Histoire
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Niveau 7(Bac +5)
          </h4>
          <p>
            Master en histoire ancienne réalisé à l&rsquo;Université Bordeaux
            Montaigne
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2015 - 2018'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>
            Licence d&rsquo;Histoire
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Niveau 6 (Bac +3)
          </h4>
          <p>
            Licence d&rsquo;histoire réalisé à l&rsquo;Université Bordeaux
            Montaigne
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2015'
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>
            Baccalauréat scientifique
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Spécialité Informatique et Sciences du Numérique
          </h4>
          <p>Bac général scientifique mention ISN réalisé</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}

export default Timeline
