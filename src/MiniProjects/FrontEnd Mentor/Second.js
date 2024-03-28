import React from 'react'
import './faq.scss';


// https://codepen.io/annafkt/pen/bGZaOZg

const Second = () => {
    return (
        <>
            <div className='containerf'>
                <article>
                    <div className='img-container'>
                        <div className='faq'>
                            <h2>FAQ</h2>
                            <div className='q-a'>
                                <div class="q-wrapper">
                                    <h2 tabindex="0">What is Frontend Mentor, and how will it help me?</h2>
                                    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd" />
                                    </svg>
                                </div>
                                <p hidden>You can invite up to 2 additional users on the Free plan. There is no limit on
                                    team members for the Premium plan.</p>
                            </div>
                        </div>
                    </div>

                </article>
            </div>
        </>
    )
}

export default Second