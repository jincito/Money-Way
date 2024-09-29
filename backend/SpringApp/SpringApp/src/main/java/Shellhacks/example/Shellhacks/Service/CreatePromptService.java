package Shellhacks.example.Shellhacks.Service;

import Shellhacks.example.Shellhacks.Repository.UserResponseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CreatePromptService {

    @Autowired
    private UserResponseRepo repo;

    @Autowired
    private OpenAIService openAIService;

    public String createPrompt(int userID) {

        List<String> responses = new ArrayList<>();

        for(int i = 1; i <= 12; i++) {
            int finalI = i;
            repo.findByUserID(userID).stream().filter(userResponse -> userResponse.getUserResponseID() == finalI).findFirst().ifPresent(userResponse -> {
                if(userResponse.isAnswer()) {
                    responses.add("Do");
                } else {
                    responses.add("Dont");
                }
            });
        }

        String prompt = "Explain taxes to me like I am 18 years old and I " + (responses.get(0)) + " know everyone in the US must file taxes regardless of their" +
                " income, I " + (responses.get(1)) + " know all income, including money from a side gig, must be reported, and I " + (responses.get(2)) +
                " know you can file your taxes online. Explain it to me in 3 long parts and give me some advice in the 4th part. Explain credit to me like I am " +
                "18 years old and I " + (responses.get(3)) + " know your credit score can affect your ability to get a loan, " +
                "I " + (responses.get(4)) + " know it is possible to get a credit card with no credit history, and I "+ (responses.get(5)) + "know" +
                " closing old credit card accounts can hurt your credit score, explain it to me in 3 long parts and give me some advice in the 4th part." +
                " Explain budgeting to me like I am 18 years old and I " + (responses.get(6)) + " know you should always reserve a part" +
                " of your budget for personal spending on things you enjoy or want, I " + (responses.get(7)) + " know you should review and update" +
                " your budget regularly, and I " + (responses.get(8)) +" know spending more than you earn is a good budgeting practice." +
                " Explain it to me in 3 long parts and give me some advice in the 4th part." +
                " Explain savings to me like I am 18 years old and I " + (responses.get(9)) + " know that it is recommended to save at least three to six months" +
                " of living expenses in an emergency fund, I " + (responses.get(10)) +" know that saving is unnecessary if you have a high income, and" +
                " I " + (responses.get(11)) + " know it is better to save money after all expenses are paid instead of setting aside savings first." +
                " Explain it to me in 3 long parts and give me some advice in the 4th part.";

        openAIService.saveOpenAIResponseToDatabase(prompt);

        return prompt;
    }



    /*
        Taxes
          Q1 - everyone in the US must file taxes regardless of their income
          Q2 - all income, including money from a side gig, must be reported
          Q3 - can you file your taxes online

          Credit
          Q4 - your credit score can affect your ability to get a loan
          Q5 - is it possible to get a credit card with no credit history
          Q6 - closing old credit card accounts can hurt your credit score

          Budgeting
          Q7 - you should always reserve a part of your budget for personal spending on things you enjoy or want
          Q8 - You should review and update your budget regularly
          Q9 - Is spending more than you earn a good budgeting practice?

          Savings
          Q10 - is it recommended to save a least three to six months of living expenses in an emergency fund
          Q11 - Is saving unnecessary if you earn a high income?
          Q12 - It's better to save money after all expenses are paid instead of setting aside savings first.
           */

    /*
    Explain taxes to me like I am {age} years old and I doDont(Question_1) know everyone in the US must file taxes regardless of their
    income, I doDont(Question_2) know all income, including money from a side gig, must be reported, and I doDont(Question_3)
    know you can file your taxes online. Explain it to me in 3 long parts and give me some advice in the 4th part.

    Explain credit to me like I am {age} years old and I doDont(Question_4) know your credit score can affect your ability to get a loan,
    I doDont(Question_5) know it is possible to get a credit card with no credit history, and I doDont(Question_6) know
    closing old credit card accounts can hurt your credit score, explain it to me in 3 long parts and give me some advice in the 4th part.

    Explain budgeting to me like I am {age} years old and I doDont(Question_7) know you should always reserve a part
    of your budget for personal spending on things you enjoy or want, I doDont(Question_8) know you should review and update
    your budget regularly, and I doDont(Question_9) know spending more than you earn is a good budgeting practice.
    Explain it to me in 3 long parts and give me some advice in the 4th part.

    Explain savings to me like I am {age} years old and I doDont(Question_10) know that it is recommended to save at least three to six months
    of living expenses in an emergency fund, I doDont(Question_11) know that saving is unnecessary if you have a high income, and
    I doDont(Question_12) know it is better to save money after all expenses are paid instead of setting aside savings first.
    Explain it to me in 3 long parts and give me some advice in the 4th part.


     */
}
