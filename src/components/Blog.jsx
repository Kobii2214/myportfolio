import React from 'react';
import './Blog.css';
import FadeInSection from './FadeInSection';

import Arrival from '../assets/arrival.jpg';
import Rizalpark from '../assets/rizalpark.jpg';
import IntraMuros from '../assets/intramuros3.jpg';
import Moa from '../assets/moaeye.jpg';

import LawEnfo from '../assets/lawpic.jpg';
import Paint from '../assets/painting.jpg';
import Subic from '../assets/Subic.jpg';

import Quezon from '../assets/quezon.jpg';
import Museum from '../assets/center2.jpg';

import Sentral from '../assets/bangko.jpg';
import Tech from '../assets/tech4.jpg';

import Lrt from '../assets/traincontrol.jpg';
import Traffic from '../assets/mmda2.jpg';

import BellChurch from '../assets/bellchurch1.jpg';
import PMA from '../assets/PMA.jpg';
import Mines from '../assets/mines.jpg';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="dot-navigation">
        <a href="#day1" className="dot-link">
          <div className="dot"></div>
          <span className="tooltip">Day 1</span>
        </a>
        <a href="#day2" className="dot-link">
          <div className="dot"></div>
          <span className="tooltip">Day 2</span>
        </a>
        <a href="#day3" className="dot-link">
          <div className="dot"></div>
          <span className="tooltip">Day 3</span>
        </a>
        <a href="#day4" className="dot-link">
          <div className="dot"></div>
          <span className="tooltip">Day 4</span>
        </a>
        <a href="#day5" className="dot-link">
          <div className="dot"></div>
          <span className="tooltip">Day 5</span>
        </a>
        <a href="#day6" className="dot-link">
          <div className="dot"></div>
          <span className="tooltip">Day 6</span>
        </a>
        <a href="#day7" className="dot-link">
          <div className="dot"></div>
          <span className="tooltip">Day 7</span>
        </a>
      </div>
      <h1 className="blog-title">Educational Tour (Day 1–7)</h1>
      <p className="blog-subtitle">My Journey Across Manila, Subic, Baguio and More.</p>

      <FadeInSection>
        <section id="day1" className="blog-section right">
          <div className="content-box">
            <h2>Day 1: Arrival and Settling in Manila (April 7)</h2>
            <div className="day-content">
              <div className="day-row">
                <div className="text">
                  <p>
                    Manila hit us with its vibrant energy right from the start! After landing via Cebu Pacific, the sheer scale of everything – the buildings reaching for the sky, the constant buzz of traffic – was immediately striking compared to home. The heat was intense, but the city's vibrancy more than made up for it. Our first glimpses of Manila were overwhelming yet exciting, with colors and sounds that seemed to never stop.
                  </p>
                  <p>
                    Even the check-in at <strong>DJM Dormitory</strong> was an experience – a melting pot of students from different backgrounds, all buzzing with anticipation. The lobby was full of energy, and as we exchanged smiles with new faces, it became clear that this trip was going to be an unforgettable journey.
                  </p>
                </div>
                <img className="day-image" src={Arrival} alt="Manila Arrival" />
              </div>

              <div className="day-row reverse">
                <img className="day-image" src={Rizalpark} alt="DJM Dormitory Lobby" />
                <div className="text">
                  <p>
                    In the afternoon, we embarked on a city tour that included some of Manila's iconic landmarks. First, we visited <strong>Rizal Park</strong>, a historical site that honors the life and legacy of national hero Dr. José Rizal. It was a peaceful and reflective moment as we walked around the park, learning more about the Philippines' rich history.
                  </p>
                </div>
              </div>

              <div className="day-row">
                <div className="text">
                  <p>
                    Next, we explored <strong>Intramuros</strong>, the historic walled city that dates back to the Spanish colonial period. Walking through its cobbled streets, we were transported back in time as we admired the old fortifications and buildings, which told the story of Manila's colonial past.
                  </p>
                </div>
                <img className="day-image" src={IntraMuros} alt="Rizal Park" />
              </div>

              <div className="day-row reverse">
                <img className="day-image" src={Moa} alt="Intramuros" />
                <div className="text">
                  <p>
                    After the city tour, our instructors gave us some free time to explore and do some shopping at the <strong>SM Mall of Asia</strong>, one of the largest malls in the country. It was the perfect way to unwind after a day full of exploration, and we took the opportunity to enjoy some shopping and indulge in local treats.
                  </p>
                </div>
              </div>

              <p>
                After settling in, we gathered for our first group dinner together. It was a mix of laughter, introductions, and discussions about what the week held in store. The excitement was contagious, and by the end of the meal, we were all eagerly anticipating the adventure ahead. Manila was just beginning to reveal its magic, and we couldn’t wait to see more of what it had to offer.
              </p>

            </div>
          </div>
        </section>
      </FadeInSection>


      <FadeInSection>
        <section id="day2" className="blog-section left">
          <div className="content-box">
            <h2>Day 2: Olongapo Insights (April 8)</h2>
            <div className="day-content">
              <h3>April 8th (Olongapo Insights)</h3>
              <div className="day-row">
                <div className="text">
                  <p>
                    After arriving in Subic, we visited the <strong>Subic Bay Exhibition and Convention Center</strong>. It was an incredible place filled with massive paintings that told captivating stories. The vibrant artwork on display gave us a deeper understanding of the region’s rich history and culture, leaving us in awe of the creativity and craftsmanship.
                  </p>
                </div>
                <img className="day-image" src={Paint} alt="Subic Bay Exhibition" />
              </div>
              <div className="day-row reverse">
                <img className="day-image" src={LawEnfo} alt="SBMA Law Enforcement Department" />
                <div className="text">
                  <p>
                    Our visit to the <strong>SBMA Law Enforcement Department-Communication Branch</strong> was surprisingly engaging. The officers walked us through their intricate dispatch and communication network, shedding light on the critical role of secure and reliable IT systems in high-stakes situations. One officer even shared a compelling story about how meticulous database management played a crucial role in cracking a particularly tough case. It was a great reminder of how technology can transform operations in law enforcement.
                  </p>
                </div>
              </div>
              <div className="day-row">
                <div className="text">
                  <p>
                    Later in the day, we visited the <strong>SBMA Seaport Department</strong>, where we witnessed the fascinating world of the <strong>Vessel Traffic Management System (VTMS)</strong>. Watching the real-time tracking of vessels on massive screens was like seeing a complex digital dance unfold before our eyes. The volume of data they process to ensure maritime safety and efficiency was nothing short of mind-boggling. The officers showed us how they coordinate with various maritime agencies, ensuring vessels navigate safely through busy waters.
                  </p>
                </div>
                <img className="day-image" src={Subic} alt="Vessel Traffic Management" />
              </div>
              <p>
                I remember thinking, "This is what enterprise-level data management truly looks like!" The whole experience gave us a deeper appreciation for how technology and data management are crucial for ensuring safety and efficiency in both law enforcement and maritime operations. As we left the seaport, there was a palpable sense of awe about the scale of operations and the impact of these systems on everyday life.
              </p>
              <p>
                Our last stop of the day was at a store that had dollar prices listed on the items, which was a bit unusual but fascinating. Although I didn’t end up buying anything, it was an interesting experience to see how pricing worked in that setting.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="day3" className="blog-section right">
          <div className="content-box">
            <h2>Day 3: Culture and History (April 9)</h2>
            <div className="day-content">
              <h3>April 9th (Manila – Museums and Reflections)</h3>
              <div className="day-row">
                <div className="text">
                  <p>
                    After two full days of diving into tech-driven environments, <strong>Day 3 offered a much-needed cultural reset</strong>. Our first stop was the <strong>Museo ni Manuel Quezon</strong>, nestled within the historic Quezon Memorial Circle. Walking through the elegant halls, we were taken on a journey through the life and legacy of President Quezon. The vintage photographs, personal artifacts, and immersive displays painted a vivid picture of the Philippines during a time of transformation and struggle for independence.
                  </p>
                </div>
                <img className="day-image" src={Quezon} alt="Museo ni Manuel Quezon" />
              </div>
              <p>
                What struck me most was Quezon’s powerful vision for a free and self-sufficient Filipino nation. Standing in front of his iconic car and listening to his recorded speeches felt almost surreal — as if the past was speaking directly to us. It made me reflect not just on the history, but on how much our generation owes to the leaders who laid the groundwork for our freedoms today.
              </p>
              <div className="day-row reverse">
                <img className="day-image" src={Museum} alt="National Museum of Natural History" />
                <div className="text">
                  <p>
                    Later in the afternoon, we headed to the <strong>National Museum of Natural History</strong>. From the moment we stepped inside, we were greeted by the stunning Tree of Life structure — a breathtaking architectural centerpiece that symbolized the interconnectedness of all living things. The museum’s exhibits were a feast for the senses: vibrant models of Philippine ecosystems, preserved wildlife, interactive kiosks, and even an immersive audio-visual cave experience.
                  </p>
                </div>
              </div>
              <p>
                The biodiversity of the Philippines was on full display, and it made me realize how fragile and valuable our environment is. As someone who’s passionate about technology, I couldn’t help but wonder: how can we harness tech for environmental monitoring and education? Could AR and AI bring endangered ecosystems to classrooms across the nation? The visit opened up a new perspective — that innovation doesn’t always mean faster or smarter, but sometimes, more aware and responsible.
              </p>
              <p>
                By the end of the day, we weren’t just filled with knowledge; we were inspired. <strong>Day 3 reminded us that progress must always walk hand-in-hand with history, identity, and a deep appreciation of the world we live in.</strong>
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="day4" className="blog-section left">
          <div className="content-box">
            <h2>Day 4: Finance and Energy (April 10)</h2>
            <div className="day-content">
              <h3>April 10th (Finance and Energy)</h3>
              <div className="day-row">
                <div className="text">
                  <p>
                    Our visit to the <strong>Bangko Sentral ng Pilipinas (BSP)</strong> was definitely a high-security affair, just as expected! Upon entering, we were briefed about their state-of-the-art IT infrastructure, specifically designed to safeguard the nation’s finances against cyber threats. The immense scale and security of their systems highlighted the vital importance of cybersecurity expertise in today's digital landscape. It was eye-opening to witness how they employ advanced security protocols to ensure the safety of sensitive financial data.
                  </p>
                  <p>
                    Unfortunately, we didn’t get to take any pictures inside the BSP due to security reasons, which was a bit of a letdown. However, the experience of learning about their cutting-edge security measures was still memorable. I also had a small regret later on – I didn’t buy any of the commemorative coins they sell at the BSP. It would have been a unique souvenir from such a significant place.
                  </p>
                </div>
                <img className="day-image" src={Sentral} alt="Bangko Sentral ng Pilipinas" />
              </div>
              <div className="day-row reverse">
                <img className="day-image" src={Tech} alt="HYTEC Power" />
                <div className="text">
                  <p>
                    In the afternoon, our trip to <strong>HYTEC Power Inc.</strong> was equally inspiring. They showcased their cutting-edge technology in renewable energy, and we learned about their innovative methods to optimize energy production using sophisticated monitoring systems and data analytics. It was amazing to see how technology is driving the transition to a more sustainable future. Their efforts in harnessing renewable energy were an inspiring example of how IT can play a critical role in addressing global environmental challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="day5" className="blog-section right">
          <div className="content-box">
            <h2>Day 5: Riding the LRT-2 and Traffic Engineering (April 11)</h2>
            <div className="day-content">
              <h3>April 11th (LRT-2 and Traffic Engineering)</h3>
              <div className="day-row">
                <div className="text">
                  <p>
                    Riding the <strong>LRT-2</strong> during rush hour was an experience in itself – a true immersion into the daily lives of Manileños! The train was packed, and yet, it gave us a tangible understanding of the sheer volume of people relying on public transport every day. The experience made me appreciate the efforts behind urban transportation systems, especially during peak hours.
                  </p>
                </div>
                <img className="day-image" src={Lrt} alt="LRT Rush Hour" />
              </div>
              <p>
                We also had the chance to visit the train’s <strong>maintenance and repair area</strong>, where we saw how the trains are serviced to ensure safety and reliability. There was also a <strong>control room</strong> — or at least what seemed like one — where staff were monitoring train operations. It was fascinating to get a behind-the-scenes look at how such a massive transit system is kept running.
              </p>
              <div className="day-row reverse">
                <img className="day-image" src={Traffic} alt="Traffic Engineering Center" />
                <div className="text">
                  <p>
                    Later, we visited the <strong>Traffic Engineering Center</strong>, where we got to witness the massive control room with its real-time traffic monitoring. The sight of so many live feeds and data points was like stepping into a sci-fi movie! The engineers explained the complex algorithms they use to manage traffic flow and prevent congestion. It gave me a newfound appreciation for the intricate IT systems that keep a megacity like Manila moving smoothly (or at least, as smoothly as possible!). The entire experience really opened my eyes to the power of technology in managing urban life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="day6" className="blog-section left">
          <div className="content-box">
            <h2>Day 6: Baguio Immersion (April 12)</h2>
            <div className="day-content">
              <h3>April 12th (Baguio Immersion)</h3>
              <div className="day-row">
                <div className="text">
                  <p>
                    Our Baguio city tour was a fantastic blend of the familiar and the new. The visit to the
                    Slaughter House was eye-opening — the behind-the-scenes view of food logistics was unlike
                    anything we’d seen before. Right after, the contrast couldn’t have been more stark: the Bell
                    Church greeted us with a wave of tranquility. Its intricate architecture, bold colors, and
                    peaceful atmosphere left many of us quietly reflective.
                  </p>
                </div>
                <img className="day-image" src={BellChurch} alt="Bell Church" />
              </div>
              <div className="day-row reverse">
                <img className="day-image" src={PMA} alt="Philippine Military Academy" />
                <div className="text">
                  <p>
                    From there, we made our way to the Philippine Military Academy. Seeing cadets in formation,
                    hearing about their daily training, and walking among those historic buildings gave me a
                    deeper appreciation for discipline and service. It almost felt cinematic. The cool mountain
                    air and pine scent added to the experience — it was a proud moment just being there.
                  </p>
                </div>
              </div>
              <p>
                That afternoon, we checked into the Prince Plaza Hotel. After days at the dormitory, this
                hotel stay felt like luxury — clean sheets, real pillows, and most importantly, hot showers!
                The comfort was short-lived though because sunset was calling. We raced to Mines View Park
                and were just in time to catch golden rays stretch over the Cordillera mountains. It was a
                moment that froze us all in awe.
              </p>
              <div className="day-row">
                <div className="text">
                  <p>
                    The day ended at Burnham Park. Some of us rented boats, others just sat near the lake,
                    chatting under the stars. Street vendors selling strawberry taho and the sound of laughter
                    filled the air. The whole day was a perfect snapshot of Baguio’s heart: vibrant, serene, and
                    deeply cultural.
                  </p>
                </div>
                <img className="day-image" src={Mines} alt="Mines View Park Sunset" />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="day7" className="blog-section right">
          <div className="content-box">
            <h2>Day 7: Free Day Fun in Baguio (April 13)</h2>
            <div className="day-content">
              <h3>April 13th (Free Day Fun)</h3>
              <div className="day-row">
                <div className="text">
                  <p>
                    Today was about freedom — our chance to explore Baguio on our own terms. Some of us headed
                    straight to the Baguio Public Market, where colors, aromas, and the buzz of early shoppers
                    created the perfect chaos. I bought a bag of fresh strawberries and a handwoven scarf that
                    reminded me of home. The vibe there was local, authentic, and bustling.
                  </p>
                </div>
              </div>
              <p>
                Others chose a more artistic route and visited the BenCab Museum. Surrounded by green hills,
                the museum itself was an architectural piece of art. Inside, we were immersed in rich
                Filipino culture — paintings, sculptures, and even installations that challenged how we
                perceive tradition and progress.
              </p>
              <p>
                Meanwhile, a few friends simply stayed back, enjoying the comfort of the hotel — lounging,
                journaling, and reflecting. It was the kind of day we all needed. Unstructured but enriching
                in its own way, reminding us to take things slow, breathe in the pine-scented air, and
                appreciate the little moments before heading back to our busy routines.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Blog;