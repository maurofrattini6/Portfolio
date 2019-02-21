package RPSGame;

import java.util.Random;
import java.util.Scanner;

public class rpsgame {
    public static void main(String[] args) {
        Scanner kb = new Scanner(System.in);
        Random rnd = new Random();

        int roundNumber = 1;
        int yourScore = 0;
        int compScore = 0;


        System.out.println("Rock, Paper, Scissors");

        try {
            Thread.sleep(800);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        while (yourScore < 3 && compScore < 3) {
            System.out.println("\nLets Play!!");

            try {
                Thread.sleep(800);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.out.println("\nRound: " + roundNumber);

            System.out.println("\nChoose: \n1 for Rock \n2 for Paper \n3 for Scissors");
            int userChoice = kb.nextInt();
            int compChoice = rnd.nextInt(3) + 1;

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
            }

            if (userChoice == 1) {
                System.out.println("\nUser: Rock");
            }
            if (userChoice == 2) {
                System.out.println("\nUser: Paper");
            }
            if (userChoice == 3) {
                System.out.println("\nUser: Scissors");
            }

            if (compChoice == 1) {
                System.out.println("Computer: Rock");
            }
            if (compChoice == 2) {
                System.out.println("Computer: Paper");
            }
            if (compChoice == 3) {
                System.out.println("Computer: Scissors");
            }

            if (userChoice == compChoice) {
                System.out.println("Round " + roundNumber + " is a tie");
                System.out.println("\nYour Score: " + yourScore);
                System.out.println("Computer Score: " + compScore);

            } else if (userChoice != compChoice) {

                if ((userChoice == 1 && compChoice == 3) || (userChoice == 2 && compChoice == 1) ||
                        (userChoice == 3 && compChoice == 2)) {
                    System.out.println("Success!! you won!");
                    yourScore++;
                    System.out.println("\nYour Score: " + yourScore);
                    System.out.println("Computer Score: " + compScore);

                } else {
                    System.out.println("Aww! you lost");
                    compScore++;
                }
                roundNumber++;

            }
        }
    }
}
