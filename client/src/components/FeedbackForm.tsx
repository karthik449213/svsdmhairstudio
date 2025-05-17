import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { feedbackFormSchema } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import StarRating from './StarRating';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

const FeedbackForm = () => {
  const { toast } = useToast();

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: '',
      email: '',
      rating: 0,
      comments: '',
    },
  });

  const feedbackMutation = useMutation({
    mutationFn: (data: FeedbackFormValues) =>
      apiRequest('POST', '/api/feedback', data),
    onSuccess: () => {
      toast({
        title: 'Feedback Submitted',
        description: 'Thank you for sharing your experience with us!',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Submission Failed',
        description: 'There was a problem submitting your feedback. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: FeedbackFormValues) => {
    feedbackMutation.mutate(data);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...field}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Rating</FormLabel>
                <FormControl>
                  <div>
                    <StarRating
                      initialRating={field.value}
                      onChange={field.onChange}
                      size="lg"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Comments</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your experience with us"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormDescription className="text-sm text-gray-500">
            Your feedback helps us improve our services. We may use your testimonial on our website (without your personal details unless permission is given).
          </FormDescription>

          <div className="text-center">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground py-3 px-8 rounded-full text-lg font-semibold hover:bg-primary/90"
              disabled={feedbackMutation.isPending}
            >
              {feedbackMutation.isPending ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </div>
              ) : (
                'Submit Feedback'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FeedbackForm;
