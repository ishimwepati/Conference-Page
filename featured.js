// Generating Featured Section dynamically.

function generateFeaturedSpeakers(image, speakerName, proffesions, speech) {
  return `
        <div class="featured-speakers-section">
          <div class="featured-speakers">
              <div class="speakers">
                  <div class="images">
                      <img src="${image}">
                  </div>
                  <div class="speaker-texts">
                      <p class="speaker-name">${speakerName}</p>
                      <p class="proffesions">${proffesions}</p>
                      <div class="line"></div>
                      <p class="speech">${speech}</p>
              </div>
              </div>
          </div>
        </div>
  `;
}

// Function to populate the generated featurd speakers section

function generateSpeakersContent() {
  // An array containing featurd speakers content.
  const speakers = [
    {
      image: './img/speaker1.png',
      speakerName: 'Ishimwe Joseph',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Benkler studies commons-based peer production, and published h',
    },
    {
      image: './img/speaker1.png',
      speakerName: 'Ishimwe Joseph',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Joseph studies commons-based peer production, and published h',
    },
    {
      image: './img/speaker3.png',
      speakerName: 'Ishimwe Joseph',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Benkler studies commons-based peer production, and published h',
    },
    {
      image: './img/speaker1.png',
      speakerName: 'Ishimwe Joseph',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Joseph studies commons-based peer production, and published h',
    },
    {
      image: './img/speaker1.png',
      speakerName: 'Ishimwe Joseph',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Ishimwe studies commons-based peer production, and published h',
    },
    {
      image: './img/speaker2.png',
      speakerName: 'Ishimwe Joseph',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Benkler studies commons-based peer production, and published h',
    },
  ];

  let speakerHTML = '';
  // Function to populate the
  speakers.forEach((speaker) => {
    speakerHTML += generateFeaturedSpeakers(
      speaker.image,
      speaker.speakerName,
      speaker.proffesions,
      speaker.speech,
    );
  });

  return speakerHTML;
}

const featuredSpeakersHTML = generateSpeakersContent();

document.getElementById('featured-speakers').innerHTML = featuredSpeakersHTML;