import "./page.css";
import Link from "next/link";
import Accordion from "./Component/Accordian/Accordian";
import Header from "./Component/Header/page";
import Form from "./Component/Form/page";
// import Cards from "./Component/Cards/Cards";

export default function page() {
  return (
    <>
      {/* Over all component pages */}
      <div className="over-all-component-pages">
        {/* First Component */}
        <div className="main-banner">
          <div className="banner-card">
            <Header />

            {/* Family banner  */}
            <div className="left-grid">
              <div className="left-content-banner">
                <div className="left-line">
                  <p>WELCOME TO SKY FINANCIAL</p>
                </div>
              </div>
              <div className="left-container-roboto">
                <h1>
                  Life's a Journey, Fly Confidently with our Protection
                  <span className="dot">.</span>
                </h1>
              </div>

              <div className="left-grid-para">
                <p>
                  At Sky Financial, we specialize in providing comprehensive
                  life insurance and annuity options tailored to meet the unique
                  needs of individuals across all age groups and income levels.
                  As a licensed provider in all 50 states, we are dedicated to
                  helping clients nationwide secure their financial futures with
                  innovative insurance solutions.
                </p>
                <p>
                  Explore our website to learn more about our products and how
                  we can help you achieve peace of mind and financial security.
                </p>
              </div>
              <div className="left-grid-get">
                <p>get in touch</p>
                <img src="/Images/arrows.svg" width="50px" height="50px" />
              </div>
            </div>
          </div>

          {/* Family banner for Mobile view and Tab view */}
          <div className="color">
            <div className="left-grid">
              <div className="left-content-banner">
                <div className="left-line">
                  <p>WELCOME TO SKY FINANCIAL</p>
                </div>
              </div>
              <div className="left-container-roboto">
                <h1>
                  Life's a Journey, Fly Confidently with our Protection
                  <span className="dot">.</span>
                </h1>
              </div>

              <div className="left-grid-para">
                <p>
                  At Sky Financial, we specialize in providing comprehensive
                  life insurance and annuity options tailored to meet the unique
                  needs of individuals across all age groups and income levels.
                  As a licensed provider in all 50 states, we are dedicated to
                  helping clients nationwide secure their financial futures with
                  innovative insurance solutions.
                </p>
                <p>
                  Explore our website to learn more about our products and how
                  we can help you achieve peace of mind and financial security.
                </p>
              </div>
              <div className="left-grid-get">
                <p>get in touch</p>
                <img src="/Images/arrows.svg" width="50px" height="50px" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Component */}
        <div className="page-top">
          <div className="page-too-find">
            {/* Animated images */}
            <div className="animation">
              <img src="/Images/Aboutus.svg" />
              {/* <Cards /> */}
            </div>

            {/* Animated insurance partner  */}
            <div className="page-two-right-grid">
              <div className="right-top">
                <div className="left-line">
                  <p>Who we are</p>
                </div>
              </div>
              <div className="page-two-right-grid-para">
                <p>
                  Your Trusted Insurance Partner<span className="dot">.</span>
                </p>
                <p>
                  Sky Financial is a leading provider of life insurance and
                  annuity solutions nationwide. With years of experience helping
                  clients achieve financial security, we have earned a
                  reputation for excellence and reliability in the insurance
                  industry.
                </p>
                <p>
                  Our dedicated team of agents is committed to providing
                  personalized service and innovative solutions tailored to meet
                  the unique needs of each client. We understand that every
                  individual's financial situation is different, and we take the
                  time to listen and recommend the best options for your needs
                  and goals.
                </p>
                <p>
                  At Sky Financial, we are passionate about helping our clients
                  secure their financial futures and enjoy peace of mind knowing
                  that their loved ones are protected.
                </p>
              </div>
            </div>
          </div>
          <div className="page-three">
            <div className="border"></div>
            <div className="flex">
              <div className="flex-one">
                <img src="/Images/time.svg" />
                <p>ANNUTIES</p>
                <p>Secure Your Retirement</p>
                <p>
                  Planning for retirement is a crucial step in achieving
                  long-term financial security. Annuities offer a reliable way
                  to generate guaranteed income for life, ensuring that you can
                  enjoy your retirement years with confidence.
                </p>
                <p>
                  At Sky Financial, we specialize in annuity products tailored
                  to the needs of high net worth individuals. Our exclusive
                  offerings provide competitive returns and tax advantages,
                  allowing you to maximize your retirement savings and enjoy a
                  worry-free future.
                </p>
                <p>
                  Whether you're looking for immediate income or a deferred
                  annuity to supplement your retirement savings, our team of
                  experts will help you navigate the options and find the right
                  solution for your needs.
                </p>
              </div>
              <div className="flex-two">
                <img src="/Images/handhold.svg" />
                <p>ANNUTIES</p>
                <p>Secure Your Retirement</p>
                <p>
                  Planning for retirement is a crucial step in achieving
                  long-term financial security. Annuities offer a reliable way
                  to generate guaranteed income for life, ensuring that you can
                  enjoy your retirement years with confidence.
                </p>
                <p>
                  At Sky Financial, we specialize in annuity products tailored
                  to the needs of high net worth individuals. Our exclusive
                  offerings provide competitive returns and tax advantages,
                  allowing you to maximize your retirement savings and enjoy a
                  worry-free future.
                </p>
                <p>
                  Whether you're looking for immediate income or a deferred
                  annuity to supplement your retirement savings, our team of
                  experts will help you navigate the options and find the right
                  solution for your needs.
                </p>
              </div>
              <div className="flex-one">
                <img src="/Images/profit.svg" />
                <p>ANNUTIES</p>
                <p>Secure Your Retirement</p>
                <p>
                  Planning for retirement is a crucial step in achieving
                  long-term financial security. Annuities offer a reliable way
                  to generate guaranteed income for life, ensuring that you can
                  enjoy your retirement years with confidence.
                </p>
                <p>
                  At Sky Financial, we specialize in annuity products tailored
                  to the needs of high net worth individuals. Our exclusive
                  offerings provide competitive returns and tax advantages,
                  allowing you to maximize your retirement savings and enjoy a
                  worry-free future.
                </p>
                <p>
                  Whether you're looking for immediate income or a deferred
                  annuity to supplement your retirement savings, our team of
                  experts will help you navigate the options and find the right
                  solution for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Component  */}
        <div className="page-four">
          {/* Register page  */}

          <div className="top-get-started">
            <div className="get-started">
              <div className="left-line">
                <p>Get Started Today</p>
              </div>
            </div>
            <div className="get-started-para">
              <h1>
                Ready to take the next step towards financial security{" "}
                <span className="dot">?</span>
              </h1>
              <p>
                Contact <span className="dot">Sky Financial</span> today to
                schedule a consultation with one of our experienced agents.
                We're here to answer your questions, address your concerns, and
                help you find the perfect insurance solutions for your needs.
              </p>
            </div>
          </div>
          {/* Register form  */}

          <div>
            <Form />
          </div>
        </div>

        {/* Fourth Component */}
        <div className="accordion-column">
          {/* //Accordians  */}
          <div className="man">
            <img src="/Images/man.svg" width="360px" height="400px" />
          </div>
          <div className="accordian-title-content">
            <Accordion
              title="How much life insurance do I actually need?"
              content={
                <div className="accordion-content">
                  <p>
                    Determining your life insurance needs depends on various
                    factors like your income, debts, and future expenses.
                  </p>
                  <p>
                    A general rule of thumb is to aim for coverage that's 5-10
                    times your annual income.
                  </p>
                  <p>
                    owever, it's crucial to consider your specific
                    circumstances, such as outstanding debts, education expenses
                    for dependents, and future financial goals
                  </p>
                  <p>
                    Consulting with our financial advisor can help tailor a
                    policy that adequately protects your loved ones and aligns
                    with your long-term plans.
                  </p>
                </div>
              }
            />
            <Accordion
              title="How can I be sure I'm getting the best rates?"
              content={
                <div className="accordion-content">
                  <p>
                    At our agency, ensuring you get the best rates is our
                    priority.
                  </p>
                  <p>
                    We leverage our extensive network and expertise to scout for
                    the most competitive offers tailored to your needs.
                  </p>
                  <p>
                    Our transparent approach means you'll always know you're
                    getting the best deal available.
                  </p>
                  <p>
                    We continuously monitor the market to keep your rates
                    optimized. Trust in our commitment to securing your
                    financial future at the most favourable terms.
                  </p>
                </div>
              }
            />
            <Accordion
              title="How long does it take to get approved for life insurance coverage?"
              content={
                <div className="accordion-content">
                  <p>
                    The approval process for life insurance coverage typically
                    ranges from a few days to several weeks.
                  </p>
                  <p>
                    Factors such as the type of policy, your health, and the
                    insurer's underwriting process influence the timeline.
                  </p>
                  <p>
                    Generally, simpler policies like term life insurance may be
                    approved more quickly, while complex policies or those
                    requiring medical exams may take longer.
                  </p>
                  <p>
                    Rest assured, we strive to expedite the process while
                    ensuring thoroughness to provide you with the best coverage
                    efficiently.
                  </p>
                </div>
              }
            />
            <Accordion
              title="What happens if I outlive the term of my life insurance policy?"
              content={
                <div className="accordion-content">
                  <p>
                    If you outlive the term of your life insurance policy, there
                    are several options available.
                  </p>
                  <p>
                    You can choose to renew the policy, convert it to a
                    permanent life insurance policy if available, or simply let
                    it expire.
                  </p>
                  <p>
                    It's important to review your options with your insurance
                    provider to determine the best course of action based on
                    your current needs and financial situation.
                  </p>
                  <p>
                    Additionally, some policies may offer the option to receive
                    a pay-out of the premiums paid, though this varies depending
                    on the terms of your policy.
                  </p>
                </div>
              }
            />
            <Accordion
              title="How can I ensure my life insurance policy adequately protects my loved ones?"
              content={
                <div className="accordion-content">
                  <p>
                    To ensure your life insurance adequately protects your loved
                    ones, start by assessing your family's financial needs and
                    future obligations.
                  </p>
                  <p>
                    Consider factors like mortgage payments, education expenses,
                    and living costs.
                  </p>
                  <p>
                    Next, work closely with our expert advisors to tailor a
                    policy that aligns with your unique circumstances and
                    provides sufficient coverage.
                  </p>
                  <p>
                    Regularly review and update your policy to accommodate any
                    changes in your life situation.
                  </p>
                  <p>
                    Rest assured, our commitment to personalized guidance
                    ensures your loved ones are safeguarded against life's
                    uncertainties.
                  </p>
                </div>
              }
            />
          </div>

          {/* Man Grid */}
          <div className="man-grid">
            <div className="left-line">
              <p>FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <div className="man-para-image">
              <div className="man-para">
                <p>
                  Get the Answers You Need<span className="dot">.</span>
                </p>
                <p>
                  Have questions about life insurance? Explore our FAQs for
                  clear, concise answers to help you make informed decisions
                  about your coverage options.
                </p>
              </div>
              <div className="man-grid-image">
                <img src="/Images/man.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
