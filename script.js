function previewAnswer(button, correct) {
    const buttons = document.querySelectorAll(".preview-options button");
    const feedback = document.getElementById("preview-feedback");

    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("correct", "wrong");
    });

    button.classList.add(correct ? "correct" : "wrong");

    if (correct) {
        feedback.textContent = "Correct — this is the kind of connection EduBridge helps you recognize.";
        feedback.className = "quiz-success";
    } else {
        feedback.textContent = "Not quite. Think about angles, distances and triangles.";
        feedback.className = "quiz-error";
    }
}


async function submitAnswer(slug, button, isCorrect, answer) {
    const buttons = document.querySelectorAll(".question-options button");
    const feedback = document.getElementById("quiz-feedback");

    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("correct-answer", "wrong-answer");
    });

    button.classList.add(isCorrect ? "correct-answer" : "wrong-answer");

    try {
        const response = await fetch("/api/quiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                slug: slug,
                answer: button.textContent.trim().replace(/^[ABC]\s*/, "")
            })
        });

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        if (data.correct) {
            feedback.innerHTML = `
                <strong>Correct ✓</strong>
                <span>${data.explanation}</span>
            `;
            feedback.className = "quiz-feedback success-box";
        } else {
            feedback.innerHTML = `
                <strong>Not quite.</strong>
                <span>The correct answer is <b>${data.answer}</b>. ${data.explanation}</span>
            `;
            feedback.className = "quiz-feedback error-box";
        }
    } catch (error) {
        feedback.textContent = "Your answer was checked, but the result could not be displayed.";
        feedback.className = "quiz-feedback error-box";
    }
}
