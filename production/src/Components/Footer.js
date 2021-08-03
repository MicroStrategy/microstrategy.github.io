import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="grid">
                <div className="ms-info">
                    <a href="https://www.microstrategy.com/en" class="site-logo" >
                        <img src="./Images/microstrategy-logo_red.svg" alt="MicroStrategy Logo" class="logo" /></a>
                </div>
                <div class="slds-col cell slds-p-vertical_none slds-size_1-of-1">
                    <nav class="nav-social">
                        <ul class="slds-grid slds-wrap">
                            <li class="slds-col cell">
                                <a href="https://twitter.com/microstrategy" class="icon twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 32 32">
                                        <title >twitter</title>
                                        <path fill="#fff" d="M31.1 3.5c-1.25 0.75-2.65 1.3-4.15 1.6-1.2-1.3-2.9-2.1-4.8-2.1-3.65 0-6.55 2.95-6.55 6.55 0 0.5 0.050 1 0.15 1.5-5.45-0.25-10.3-2.9-13.5-6.85-0.55 0.95-0.9 2.1-0.9 3.3 0 2.3 1.15 4.3 2.9 5.45-1.1-0.050-2.1-0.35-2.95-0.8 0 0.050 0 0.050 0 0.1 0 3.2 2.25 5.85 5.25 6.45-0.55 0.15-1.15 0.25-1.75 0.25-0.4 0-0.85-0.050-1.25-0.1 0.85 2.6 3.25 4.5 6.15 4.55-2.25 1.75-5.1 2.8-8.15 2.8-0.55 0-1.050-0.050-1.55-0.1 2.9 1.8 6.35 2.9 10.050 2.9 12.1 0 18.7-10 18.7-18.7 0-0.3 0-0.55 0-0.85 1.3-0.95 2.4-2.1 3.3-3.4-1.2 0.5-2.45 0.9-3.75 1.050 1.3-0.8 2.35-2.1 2.8-3.6z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="slds-col cell">
                                <a href="https://linkedin.com/company/microstrategy" class="icon linkedin">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 32 32">
                                        <title >linkedin</title>
                                        <path fill="#fff" d="M17.2 14.45v0c0-0.050 0-0.050 0 0v0zM31.9 29.7v-27.4c0-1.25-1.050-2.3-2.35-2.3h-27.1c-1.3 0-2.35 1.050-2.35 2.3v27.4c0 1.25 1.050 2.3 2.35 2.3h27.1c1.3 0 2.35-1.050 2.35-2.3zM9.75 26.8h-4.8v-14.45h4.8v14.45zM7.35 10.35v0c-1.65 0-2.7-1.1-2.7-2.5s1.050-2.5 2.7-2.5c1.65 0 2.65 1.1 2.7 2.5 0 1.4-1.050 2.5-2.7 2.5zM27.050 26.8h-4.8v-7.75c0-1.95-0.7-3.25-2.45-3.25-1.35 0-2.1 0.9-2.45 1.75-0.15 0.3-0.15 0.75-0.15 1.15v8.050h-4.8c0 0 0.050-13.1 0-14.45h4.8v2.050c0.65-1 1.8-2.4 4.35-2.4 3.15 0 5.55 2.050 5.55 6.5v8.35z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="slds-col cell btn slim black">
                                <a href="https://www.microstrategy.com/en/company/contact-us?now=start" class="icon">Contact us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="slds-col cell cell-hidden slds-size_1-of-1">
                    <p class="copyright">©&nbsp;2021 Copyright MicroStrategy Incorporated. All Rights Reserved.</p>
                </div>
            </div>
            <div className="site-nav">
                <div class="slds-grid">
                    <div class="slds-col cell">
                        <nav class="nav-sitemap">
                            <p class="label">
                                <a href="https://www.microstrategy.com/en/business-intelligence" class="label-link">Intelligence</a>
                            </p>
                            <li>
                                <a href="https://www.microstrategy.com/en/business-intelligence">BI &amp; Analytics</a>
                            </li>
                            <li>
                                <a href="https://www.microstrategy.com/en/hyperintelligence">Hyper</a>
                            </li>
                            <li>
                                <a href="https://www.microstrategy.com/en/business-intelligence/embedded-intelligence">Embedded</a>
                            </li>
                            <li>
                                <a href="https://www.microstrategy.com/en/business-intelligence/embedded-intelligence">What's New</a>
                            </li>
                            <li>
                                <a href="https://www.microstrategy.com/en/go/products/request-pricing">Request Pricing</a>
                            </li>
                        </nav>
                    </div>
                    <div class="slds-col cell">
                        <nav class="nav-sitemap">
                            <p class="label">
                                <a href="https://community.microstrategy.com/s/?language=en_US" class="label-link">Community</a>
                            </p>
                            <li>
                                <a href="https://community.microstrategy.com/s/documentation">Documentation</a>
                            </li>
                            <li>
                                <a href="https://community.microstrategy.com/s/discussions?language=en_US">Knowledge Base</a>
                            </li>
                            <li>
                                <a href="https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/">API</a>
                            </li>
                            <li>
                                <a href="https://community.microstrategy.com/s/products?language=en_US">Software</a>
                            </li>
                            <li>
                                <a href="https://blog.microstrategy.com/">Blog</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
