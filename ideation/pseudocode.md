Create a quiz generated from an array or objects, it needs to have 5 questions and each question is multiple choice (4 answers). Each answer belongs to a role (product designer, ui/ux designer, software engineer), for each answer give a point to the role it's associated with. At the end of the quiz you'll get matched to the role picked the most answers to.

---

1. **Initialize the Questions and Answers:**
   - Prepare a list of questions. Each question should be accompanied by multiple answer options.
   - Each answer option should indicate which role it supports or contributes points to when selected.

2. **Set Up Role Scores:**
   - Create a scoring system where each role starts with zero points.

3. **Display the Quiz:**
   - Show each question to the user one by one, along with the answer options for them to choose from.

4. **Collect User Answers:**
   - As the user selects an answer for each question, record their choices. The choice should reflect both the user's answer and the role that answer supports.

5. **Calculate Role Scores Based on Answers:**
   - For each answer the user has selected, find out which role it contributes to and update the score for that role accordingly. This means adding a point to the respective role's total score every time its associated answer is chosen.

6. **Determine the Winning Role:**
   - After all questions have been answered and scores have been updated, identify which role has the highest score. This role is considered the "winning" role, suggesting it is the most suitable or dominant role based on the user's answers.

7. **Conclude the Quiz:**
   - Announce the role that best fits the user according to their answers. This could be the role with the highest score or a combination of roles if there's a tie or if the logic includes interpreting mixed scores.
