import React from 'react'

interface GeneralDetProps {}

const GeneralDetails: React.FC<GeneralDetProps> = () => {
    return(
        <div className='general-container'>
            <section className="general-details-category">
                <h4>Personal Information</h4>
                <div>
                    <span className='detail'>FULL NAME <strong>Grace Effiom</strong></span>
                    <span className='detail'>PHONE NUMBER</span>
                    <span className='detail'>EMAIL ADDRESS</span>
                    <span className='detail'>BVN</span>
                    <span className='detail'>GENDER</span>
                    <span className='detail'>MARITAL STATUS</span>
                    <span className='detail'>CHILDREN</span>
                    <span className='detail'>TYPE OF RESIDENCE</span>
                </div>
            </section>
            <section className="general-details-category">
                <h4>Education and Employment</h4>
                <div>
                    <span className='detail'>LEVEL OF EDUCATION <strong>B.Sc</strong></span>
                    <span className='detail'>EMPLOYMENT STATUS</span>
                    <span className='detail'>SECTOR OF EMPLOYMENT</span>
                    <span className='detail'>DURATION OF EMPLOYMENT</span>
                    <span className='detail'>OFFICE EMAIL</span>
                    <span className='detail'>MONTHLY INCOME</span>
                    <span className='detail'>LOAN REPAYMENT</span>
                </div>
            </section>
            <section className="general-details-category">
                <h4>Socials</h4>
                <div>
                    <span className='detail'>TWITTER</span>
                    <span className='detail'>FACEBOOK</span>
                    <span className='detail'>INSTAGRAM</span>
                </div>
            </section>
            <section className="general-details-category">
                <h4>Guarantor</h4>
                <div>
                    <span className='detail'>FULL NAME</span>
                    <span className='detail'>PHONE NUMBER</span>
                    <span className='detail'>EMAIL ADDRESS</span>
                    <span className='detail'>RELATIONSHIP</span>
                </div>
            </section>
        </div>
    )
}

export default GeneralDetails