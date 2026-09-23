import urllib.request

def test_all():
    # 1. Test publications.html
    req = urllib.request.Request('http://localhost:8000/publications.html', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8')
        assert resp.status == 200, f"Status: {resp.status}"
        assert any(k in content for k in ['prepared_ra_ild_paper', 'pubmed-preeclampsia-paper', 'Screenshot_2026-09-21_190515']), "Missing uploaded research paper"
        assert 'pub_card_2_osteochondroma' in content, "Missing osteochondroma paper"
        assert 'pub_card_3_failed_induction' in content, "Missing failed induction paper"
        assert 'data-card-link' in content, "Missing card redirect link"
        assert 'publications-grid-custom' in content, "Missing custom grid class"
        assert 'publication-upload-slot' in content, "Missing upload slot"
        print("[OK] publications.html passed all tests")

    # 2. Test editor.html
    req2 = urllib.request.Request('http://localhost:8000/editor.html', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req2) as resp2:
        content2 = resp2.read().decode('utf-8')
        assert resp2.status == 200, f"Status: {resp2.status}"
        assert 'cardRedirectUrlInput' in content2, "Missing cardRedirectUrlInput"
        assert 'cardImgFitGroup' in content2, "Missing cardImgFitGroup"
        assert 'cardWidthSlider' not in content2, "cardWidthSlider should be removed"
        assert 'btnApplySizeAllCards' not in content2, "btnApplySizeAllCards should be removed"
        assert 'dockBtnPublications' in content2, "Missing dockBtnPublications"
        print("[OK] editor.html passed all tests")

    # 3. Test js/visual-editor.js
    req3 = urllib.request.Request('http://localhost:8000/js/visual-editor.js', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req3) as resp3:
        content3 = resp3.read().decode('utf-8')
        assert 'cardRedirectUrlInput' in content3, "Missing cardRedirectUrlInput in JS"
        assert 'cardImgFitBtns' in content3, "Missing cardImgFitBtns in JS"
        assert 'pubLinkField' in content3, "Missing pubLinkField in JS"
        assert 'btnSaveCardLink' in content3, "Missing btnSaveCardLink in JS"
        assert 'updateCardDimensions' in content3, "Missing updateCardDimensions"
        print("[OK] js/visual-editor.js passed all tests")

    # 4. Test css/components.css
    req4 = urllib.request.Request('http://localhost:8000/css/components.css', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req4) as resp4:
        content4 = resp4.read().decode('utf-8')
        assert 'publications-grid-custom' in content4, "Missing publications-grid-custom in components.css"
        assert '600 / 414' in content4, "Missing 600/414 in components.css"
        print("[OK] css/components.css passed all tests")

    # 5. Test css/visual-editor.css
    req5 = urllib.request.Request('http://localhost:8000/css/visual-editor.css', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req5) as resp5:
        content5 = resp5.read().decode('utf-8')
        assert 'aspect-ratio: 600 / 414' in content5, "Missing 600/414 in visual-editor.css"
        print("[OK] css/visual-editor.css passed all tests")

    # 6. Test testimonials.html and WhatsApp Testimonials
    req6 = urllib.request.Request('http://localhost:8000/testimonials.html', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req6) as resp6:
        content6 = resp6.read().decode('utf-8')
        assert resp6.status == 200, f"Status: {resp6.status}"
        assert 'whatsapp-testimonials-grid' in content6, "Missing whatsapp-testimonials-grid in testimonials.html"
        assert 'whatsapp_feedback_card_1' in content6, "Missing whatsapp_feedback_card_1 in testimonials.html"
        assert 'whatsapp_feedback_card_2' in content6, "Missing whatsapp_feedback_card_2 in testimonials.html"
        assert 'whatsapp_feedback_card_3' in content6, "Missing whatsapp_feedback_card_3 in testimonials.html"
        print("[OK] testimonials.html passed all tests")

    print("\nALL VERIFICATIONS PASSED SUCCESSFULLY!")

if __name__ == '__main__':
    test_all()
