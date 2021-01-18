import java.util.HashMap;
import java.util.Map;

public class Fib {

   public int fibRecursive(int num) {
      if (num <= 2) {
         return 1;
      }

      return fibRecursive(num - 1) + fibRecursive(num - 2);
   }

   public int fibMemo(int n, Map<Integer, Integer> memo) {

      if (memo.containsKey(n))
         return memo.get(n);
      if (n <= 2)
         return 1;

      memo.put(n, fibMemo(n - 1, memo) + fibMemo(n - 2, memo));

      return memo.get(n);
   }

   private void runRecursiveExamples() {
      System.out.println("recursive examples ---------");

      for (int i = 1; i <= 10; ++i) {
         System.out.println(fibRecursive(i));
      }
      System.out.println(fibRecursive(30));
      System.out.println(fibRecursive(40));
      System.out.println();
   }

   private void runMemoExamples() {
      Map<Integer, Integer> memo = new HashMap<>();

      System.out.println("memo examples -----------");

      for (int i = 1; i <= 10; ++i) {
         System.out.println(fibMemo(i, memo));
         memo.clear();
      }
      System.out.println(fibMemo(30, memo));
      memo.clear();

      System.out.println(fibMemo(40, memo));
      memo.clear();

   }

   public static void main(String[] args) {

      Fib f = new Fib();

      f.runRecursiveExamples();
      f.runMemoExamples();

   }
}