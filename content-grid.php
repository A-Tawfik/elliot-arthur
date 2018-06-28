<div class="ea-l-container">

    <style>
        .ea-l-column {
            background: #ddd; 
            padding: 1.5em 0.5em; 
            margin-bottom: 1em; 
            font-size:14px; 
            line-height:1.1; 
            font-weight: bold; 
            text-align:center;
        }
    </style>

    <div class="ea-l-row ea-u-my-3">
        
        <?php

            $i = 1;
            $columns = 6;
            
            do { ?>
            
                <div class="<?php echo "ea-l-column"; ?>"><?php echo ".ea-l-column"; ?></div>

            <?php $i++;
            }
            
            while( $i <= $columns );

        ?>

    </div>

    <div class="ea-l-row ea-u-my-3">
        <div class="ea-l-column ea-l-span-4-lg" style="padding:1.5em 0">
            .ea-l-span-4-lg
        </div>
        <div class="ea-l-column ea-l-span-8-lg" style="padding:1.5em 0">
            .ea-span-8-lg
            <div class="ea-l-row ea-u-mt-1">
                <div class="ea-l-column ea-l-span-4-md ea-l-span-6-lg" style="background:#bbb">.ea-l-span-4-md.ea-l-span-6-lg</div>
                <div class="ea-l-column ea-l-span-4-md ea-l-span-6-lg" style="background:#bbb">.ea-l-span-4-md.ea-l-span-6-lg</div>
                <div class="ea-l-column ea-l-span-4-md ea-l-span-6-lg" style="background:#bbb">.ea-l-span-4-md.ea-l-span-6-lg</div>
                <div class="ea-l-column ea-l-span-4-md ea-l-span-6-lg" style="background:#bbb">.ea-l-span-4-md.ea-l-span-6-lg</div>
                <div class="ea-l-column ea-l-span-4-md ea-l-span-6-lg" style="background:#bbb">.ea-l-span-4-md.ea-l-span-6-lg</div>
                <div class="ea-l-column ea-l-span-4-md ea-l-span-6-lg" style="background:#bbb">.ea-l-span-4-md.ea-l-span-6-lg</div>
            </div>
        </div>
    </div>

    <div class="ea-l-row ea-u-my-3">

        <?php

            $i = 1;
            $columns = 12;

            do { ?>
            
                <div class='<?php echo "ea-l-column ea-l-span-{$i}"; ?>'><?php echo ".ea-l-span-{$i}"; ?></div>
                
                <?php 
                $alt_i = $columns - $i;
                if ( $alt_i > 0 ) {
                    do { ?>

                        <div class='ea-l-column ea-l-span-1 ea-l-span-1-sm ea-l-span-1-md ea-l-span-1-lg'>.ea-l-span-1</div>

                    <?php $alt_i--; 
                    } 
                    
                    while( $alt_i > 0 );
                } ?>

            <?php $i++;
            }
            
            while( $i <= $columns );

        ?>

    </div>


</div>
