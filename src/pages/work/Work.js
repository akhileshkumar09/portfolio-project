import React from 'react'
import './Work.css'
import WorkPic from '../../components/work-component/WorkPic'

function Work() {
  return (
    <div className='work' id='works'>
       <h2>Selected Work from<br/> 2022 the present</h2>
       <WorkPic brand='Memex' location='🏳️‍🌈 Germani, angle investors'
        detail='Organize, take notes and discuss the web without context switches & copy pasting. By yourself, with your peers and enhanced by AI.'
        firstImage='https://img.freepik.com/premium-photo/financial-analysts-analyze-business-financial-reports-digital-tablet-planning-investment-project-during-discussion-meeting-corporate-showing-results-their-successful-teamwork_265022-64998.jpg?size=626&ext=jpg'
        midleImage='https://img.freepik.com/free-vector/office-workers-analyzing-researching-business-data-vector-illustration-marketing-analysts-developing-strategy-business-people-studying-infographics-diagrams-dashboard_74855-12403.jpg?size=626&ext=jpg&ga=GA1.1.787412184.1725596507&semt=ais_hybrid'
        thirdImage = 'https://img.freepik.com/premium-photo/manager-providing-constructive-feedback-employees-after-project-review_1314467-52599.jpg?size=626&ext=jpg&ga=GA1.1.787412184.1725596507&semt=ais_hybrid'
       />
        <WorkPic brand='Quantia' location='🏳️ Uruguay, self-funded'
        detail='Organize, take notes and discuss the web without context switches & copy pasting. By yourself, with your peers and enhanced by AI.'
        firstImage='https://img.freepik.com/premium-psd/3d-render-businessman-holding-trophy-cup-bar-graph-with-target-board-cog-wheel-hourglass-black-background_1302-35778.jpg?ga=GA1.1.787412184.1725596507&semt=ais_hybrid'
        midleImage='https://img.freepik.com/premium-psd/3d-successful-businessman-achievement-podium_380580-1335.jpg?ga=GA1.1.787412184.1725596507&semt=ais_hybrid'
        thirdImage = 'https://img.freepik.com/free-psd/super-hero-businessman-red-cape-frying-upward-target-isolated-background_1150-65043.jpg?ga=GA1.1.787412184.1725596507&semt=ais_hybrid'
       />
    </div>
  )
}

export default Work