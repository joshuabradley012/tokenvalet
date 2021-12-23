import React from 'react';
import './style.scss';
import {
  Link,
} from 'components';

const About = () => (
  <section className="about-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-content">
          <h1>About us</h1>
          <p>Our story began when we recognized an opportunity to transform valet service. The valet process faces the same challenge that all workflows suffer from, which is the monitoring and regulating of naturally occurring human error. Some of the best innovations in technology were born to solve this exact challenge. Workflow issues are clearly evident and repetitive to the extent that one wonders why a solution doesn’t already exist in every field. Moreover, we realized that the challenge wasn’t in identifying the problem. The challenge exists in streamlining complex, error-prone processes into intuitive, powerful software.</p>
          <p>At <strong>tokenvalet</strong>, we solve problems by obsessing over simplicity. First, we distill complexity into its fundamental components. Then, we rebuild systems using this deep understanding to create efficiency. Simplicity guides everything we do from communication to product development.</p>
          <p>We are committed to building an application that can elegantly handle any use case. The problem with existing valet solutions is that they were built separately from real-world conditions. They only work when things are running smoothly. That said, we’re taking our time to build this right. We are creating partnerships within the valet industry to develop features which will work in any situation. Our goal is to enable every valet to do what they do best; create world-class experiences.</p>

          <h2>Meet the team</h2>
          <p>For now, it’s just the two of us, Adrian and Josh. We got our start when Adrian realized the complexity of valet service could be solved with software. Armed with a simple but potent idea, expertise in sales, and a brilliant mind for business, he began seeking an engineer who could turn his ideas into reality. Enter Josh.</p>
          <p>Josh’s reputation for solving difficult challenges comes from his background at Procore where he spent four years building the technical foundation of their marketing department. This prepared Procore for a successful IPO in 2020. Ready for a new challenge, Adrian and Josh agreed upon a partnership and immediately began roadmapping the steps required to launch a product to digitize valet service.</p>
          <p>If you want to see what we’re working on take a look at our <Link href="/roadmap">roadmap</Link> and don’t hesitate to <Link href="/contact">get in touch</Link> if you want to be involved.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

