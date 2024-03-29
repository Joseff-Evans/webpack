import * as React from 'react';

import { Button } from '../../../components/ui/button';
import { ToastAction } from '../../../components/ui/toast';
import { useToast } from '../../../components/ui/use-toast';

export default function ToastyBoi() {
    const { toast } = useToast()

    return (
      <div>
        <Button 
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            })
          }}
        > A Toasty Button </Button>
      </div>
    );
}