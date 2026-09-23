import re

with open('testimonials.html', 'r', encoding='utf-8') as f:
    text = f.read()

clean_cards = """<div class="whatsapp-testimonials-grid" id="whatsappTestimonialsGrid">
          <!-- WhatsApp Testimonial 1 -->
          <div class="whatsapp-testimonial-card" title="Click to view full WhatsApp conversation preview">
            <img src="assets/images/testimonials/whatsapp_feedback_card_1.png" alt="WhatsApp Client Feedback - Thesis Editing and Corrections" class="whatsapp-testimonial-img" loading="lazy">
            <div class="whatsapp-zoom-badge">
              <span class="material-symbols-outlined" style="font-size: 14px;">zoom_in</span>
              <span>View Chat</span>
            </div>
          </div>

          <!-- WhatsApp Testimonial 2 -->
          <div class="whatsapp-testimonial-card" title="Click to view full WhatsApp conversation preview">
            <img src="assets/images/testimonials/whatsapp_feedback_card_2.png" alt="WhatsApp Client Feedback - Quality and Timings Honest Opinion" class="whatsapp-testimonial-img" loading="lazy">
            <div class="whatsapp-zoom-badge">
              <span class="material-symbols-outlined" style="font-size: 14px;">zoom_in</span>
              <span>View Chat</span>
            </div>
          </div>

          <!-- WhatsApp Testimonial 3 -->
          <div class="whatsapp-testimonial-card" title="Click to view full WhatsApp conversation preview">
            <img src="assets/images/testimonials/whatsapp_feedback_card_3.png" alt="WhatsApp Client Feedback - ENT Department Presentation and Hard Copy" class="whatsapp-testimonial-img" loading="lazy">
            <div class="whatsapp-zoom-badge">
              <span class="material-symbols-outlined" style="font-size: 14px;">zoom_in</span>
              <span>View Chat</span>
            </div>
          </div>
        </div>"""

text = re.sub(r'<div class="whatsapp-testimonials-grid" id="whatsappTestimonialsGrid">[\s\S]*?</div>\s*</div>\s*</section>', clean_cards + '\n      </div>\n    </section>', text, count=1)

with open('testimonials.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Testimonials cleaned successfully. Length:", len(text))
